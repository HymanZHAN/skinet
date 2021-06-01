import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  EMPTY_DELIVERY_METHOD,
  IDeliveryMethod,
} from 'src/app/shared/models/delivery-method.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IOrder, IOrderSummary, IOrderToCreate } from '../shared/models/order.model';
import { BasketService } from '../basket/basket.service';
import { EMPTY_ADDRESS, IAddressFormValue } from '../shared/models/address.model';
import { IBasket } from '../shared/models/basket.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  baseUrl = environment.apiUrl;
  deliveryMethods = new BehaviorSubject<IDeliveryMethod[]>([]);
  deliveryMethods$ = this.deliveryMethods.asObservable();

  private deliveryMethod = new BehaviorSubject<IDeliveryMethod>(EMPTY_DELIVERY_METHOD);
  deliveryMethod$ = this.deliveryMethod.asObservable();

  private shippingAddress = new BehaviorSubject<IAddressFormValue>(EMPTY_ADDRESS);
  shippingAddress$ = this.shippingAddress.asObservable();

  private basket$ = this.basketService.basket$;

  private orderSubtotal$ = this.basket$.pipe(map((basket) => this.calculateOrderSubtotal(basket)));
  private orderShippingFee$ = this.deliveryMethod$.pipe(
    map((deliveryMethod) => deliveryMethod.price)
  );
  private orderTotal$ = combineLatest([this.orderSubtotal$, this.orderShippingFee$]).pipe(
    map((obs) => obs[0] + obs[1])
  );

  orderSummary$ = combineLatest([
    this.orderSubtotal$,
    this.orderShippingFee$,
    this.orderTotal$,
  ]).pipe(
    map((obs) => {
      return {
        orderSubtotal: obs[0],
        orderShippingFee: obs[1],
        orderTotal: obs[2],
      } as IOrderSummary;
    })
  );

  constructor(private http: HttpClient, private basketService: BasketService) {}

  getDeliveryMethods() {
    return this.http.get<IDeliveryMethod[]>(`${this.baseUrl}/orders/deliveryMethods`).pipe(
      map((methods) => methods.sort((a, b) => b.price - a.price)),
      map((methods) => this.deliveryMethods.next(methods))
    );
  }

  setShippingMethod(methodId: string) {
    let nextMethod = this.deliveryMethods.value.find((m) => m.id.toString() === methodId);
    nextMethod = nextMethod || EMPTY_DELIVERY_METHOD;
    this.deliveryMethod.next(nextMethod);

    const currentBasket = this.basketService.currentBasket;
    currentBasket.deliveryMethodId = nextMethod.id;
    this.basketService.setBasket(currentBasket);
  }

  clearShippingMethod() {
    this.deliveryMethod.next(EMPTY_DELIVERY_METHOD);
  }

  setShippingAddress(address: IAddressFormValue) {
    this.shippingAddress.next(address);
  }

  generateOrderToCreate() {
    let orderToCreate;
    combineLatest([this.basket$, this.deliveryMethod$, this.shippingAddress$])
      .pipe(
        map((obs) => {
          return {
            basketId: obs[0].id,
            deliveryMethodId: obs[1].id,
            shipToAddress: obs[2],
          } as IOrderToCreate;
        })
      )
      .subscribe((order) => {
        orderToCreate = order;
      })
      .unsubscribe();
    return orderToCreate;
  }

  createOrder() {
    const orderToCreate = this.generateOrderToCreate();
    return this.http.post<IOrder>(`${this.baseUrl}/orders`, orderToCreate);
  }

  calculateOrderSubtotal(basket: IBasket) {
    return basket.items.length === 0
      ? 0
      : basket.items.map((item) => item.quantity * item.price).reduce((a, b) => a + b);
  }

  createPaymentIntent() {
    return this.basketService.createPaymentIntent();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CheckoutService } from '../checkout/checkout.service';
import { Basket, IBasket, IBasketItem } from '../shared/models/basket.model';
import { EMPTY_DELIVERY_METHOD, IDeliveryMethod } from '../shared/models/delivery-method.model';
import { IOrderSummary } from '../shared/models/order.model';
import { IProduct } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(new Basket());
  basket$ = this.basketSource.asObservable();

  basketItems$ = this.basket$.pipe(map((basket) => basket.items));
  basketItemCount$ = this.basket$.pipe(map((basket) => this.calculateBasketItemCount(basket)));

  constructor(private http: HttpClient) {}

  calculateBasketItemCount(basket: IBasket) {
    return basket.items.length === 0
      ? 0
      : basket.items.map((item) => item.quantity).reduce((a, b) => a + b);
  }

  calculateOrderSubtotal(basket: IBasket) {
    return basket.items.length === 0
      ? 0
      : basket.items.map((item) => item.quantity * item.price).reduce((a, b) => a + b);
  }

  getBasketById(id: string) {
    return this.http.get<IBasket>(`${this.baseUrl}/basket?id=${id}`).pipe(
      map((basket) => {
        this.basketSource.next(basket);
      })
    );
  }

  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(`${this.baseUrl}/basket`, basket).subscribe((newBasket) => {
      this.basketSource.next(newBasket);
    });
  }

  deleteLocalBasketById(id: string) {
    this.basketSource.next(new Basket());
    localStorage.removeItem('basketId');
  }

  deleteBasketById(id: string) {
    return this.http.delete(`${this.baseUrl}/basket?id=${id}`).subscribe(() => {
      this.basketSource.next(new Basket());
      localStorage.setItem('basketId', this.basketSource.value.id);
    });
  }

  get currentBasket() {
    return this.basketSource.value;
  }

  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = mapProductItemToBasketItem(item, quantity);
    const basket = this.basketSource.value;
    localStorage.setItem('basketId', basket.id);
    basket.items = this.addOrUpdateItems(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  incrementBasketItem(item: IBasketItem) {
    const basket = this.basketSource.value;
    basket.items = this.addOrUpdateItems(basket.items, item, 1);
    this.setBasket(basket);
  }

  decrementBasketItem(item: IBasketItem) {
    if (item.quantity > 1) {
      const basket = this.basketSource.value;
      basket.items = this.addOrUpdateItems(basket.items, item, -1);
      this.setBasket(basket);
    }
  }

  removeBasketItem(item: IBasketItem) {
    const basket = this.basketSource.value;
    basket.items = basket.items.filter((t) => t.id !== item.id);
    this.setBasket(basket);
  }

  private addOrUpdateItems(
    items: IBasketItem[],
    itemToAdd: IBasketItem,
    quantity: number
  ): IBasketItem[] {
    const index = items.findIndex((i) => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }
}

export function mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
  return {
    id: item.id,
    productName: item.name,
    price: item.price,
    pictureUrl: item.pictureUrl,
    brand: item.productBrand,
    type: item.productType,
    quantity,
  };
}

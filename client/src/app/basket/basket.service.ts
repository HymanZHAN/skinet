import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem } from '../shared/models/basket';
import { IProduct } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(new Basket());
  basket$ = this.basketSource.asObservable();
  basketItemCount$ = this.basket$.pipe(map((basket) => this.calculateBasketItemCount(basket)));
  orderSubtotal$ = this.basket$.pipe(map((basket) => this.calculateOrderSubtotal(basket)));
  orderShippingFee$ = this.basket$.pipe(map((basket) => this.calculateOrderShippingFee(basket)));
  orderTotal$ = this.basket$.pipe(map((basket) => this.calculateOrderTotal(basket)));

  constructor(private http: HttpClient) {}

  calculateBasketItemCount(basket: IBasket) {
    return basket.items.length === 0
      ? 0
      : basket.items.map((item) => item.quantity).reduce((a, b) => a + b);
  }

  calculateOrderSubtotal(basket: IBasket) {
    console.log(basket.items);
    return basket.items.length === 0
      ? 0
      : basket.items.map((item) => item.quantity * item.price).reduce((a, b) => a + b);
  }

  calculateOrderShippingFee(basket: IBasket) {
    return 0;
  }

  calculateOrderTotal(basket: IBasket) {
    return this.calculateOrderShippingFee(basket) + this.calculateOrderSubtotal(basket);
  }

  getBasket(id: string) {
    return this.http.get<IBasket>(this.baseUrl + 'basket?id=' + id).pipe(
      map((basket) => {
        this.basketSource.next(basket);
      })
    );
  }

  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(this.baseUrl + 'basket', basket).subscribe((newBasket) => {
      this.basketSource.next(newBasket);
    });
  }

  get currentBasket() {
    return this.basketSource.value;
  }

  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = mapProductItemToBasketItem(item, quantity);
    const basket = this.currentBasket;
    localStorage.setItem('basketId', basket.id);
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  private addOrUpdateItem(
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

function mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
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

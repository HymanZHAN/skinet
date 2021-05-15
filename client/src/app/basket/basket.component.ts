import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBasket } from '../shared/models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basket$: Observable<IBasket>;
  basketCount$: Observable<number>;
  orderSubtotal$: Observable<number>;
  orderShippingFee$: Observable<number>;
  orderTotal$: Observable<number>;

  constructor(private basketService: BasketService) {
    this.basket$ = this.basketService.basket$;
    this.basketCount$ = this.basketService.basketItemCount$;

    this.orderSubtotal$ = this.basketService.orderSubtotal$;
    this.orderShippingFee$ = this.basketService.orderShippingFee$;
    this.orderTotal$ = this.basketService.orderTotal$;
  }
}

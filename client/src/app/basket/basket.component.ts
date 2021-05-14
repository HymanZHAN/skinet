import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBasket } from '../shared/models/basket';
import { EMPTY_PRODUCT, IProduct } from '../shared/models/product.model';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basket$: Observable<IBasket>;
  basketCount$: Observable<number>;

  constructor(private basketService: BasketService) {
    this.basket$ = this.basketService.basket$;
    this.basketCount$ = this.basket$.pipe(map((basket) => basket.items.length));
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shared/models/basket.model';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basketCount$: Observable<number>;

  constructor(private basketService: BasketService) {
    this.basketCount$ = this.basketService.basketItemCount$;
  }

  incrementItemCount(item: IBasketItem) {
    this.basketService.incrementBasketItem(item);
  }

  decrementItemCount(item: IBasketItem) {
    this.basketService.decrementBasketItem(item);
  }

  removeItem(item: IBasketItem) {
    this.basketService.removeBasketItem(item);
  }
}

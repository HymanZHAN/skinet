import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckoutService } from '../checkout/checkout.service';
import { IBasket, IBasketItem } from '../shared/models/basket.model';
import { IOrderSummary } from '../shared/models/order.model';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basketCount$: Observable<number>;
  basketItems$: Observable<IBasketItem[]>;
  orderSummary$: Observable<IOrderSummary>;

  constructor(private basketService: BasketService, private checkoutService: CheckoutService) {
    this.basketCount$ = this.basketService.basketItemCount$;
    this.basketItems$ = this.basketService.basketItems$;
    this.orderSummary$ = this.checkoutService.orderSummary$;

    this.loadExternalScripts('https://js.stripe.com/v3/')
      .then(() => {})
      .catch(() => {});
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

  private loadExternalScripts(scriptUrl: string) {
    return new Promise((resolve) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketItem } from 'src/app/shared/models/basket.model';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss'],
})
export class CheckoutReviewComponent {
  basketItems$: Observable<IBasketItem[]>;
  constructor(private basketService: BasketService) {
    this.basketItems$ = this.basketService.basketItems$;
  }
}

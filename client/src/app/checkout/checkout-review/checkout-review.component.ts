import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketItem } from 'src/app/shared/models/basket.model';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss'],
})
export class CheckoutReviewComponent {
  @Input() stepper!: CdkStepper;
  basketItems$: Observable<IBasketItem[]>;

  constructor(private basketService: BasketService) {
    this.basketItems$ = this.basketService.basketItems$;
  }

  submitPaymentIntent() {
    this.basketService.createPaymentIntent().subscribe(
      (resp: any) => {
        this.stepper.next();
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

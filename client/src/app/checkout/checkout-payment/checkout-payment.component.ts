import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket.model';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent {
  @Input() checkoutForm!: FormGroup;

  constructor(
    private basketService: BasketService,
    private checkoutService: CheckoutService,
    private toast: HotToastService,
    private router: Router
  ) {}

  // ngOnInit(): void {}

  submitOrder() {
    const basket = this.basketService.currentBasket;
    this.checkoutService.createOrder().subscribe(
      (order) => {
        this.toast.success('Order created successfully.');
        this.basketService.deleteLocalBasketById(basket.id);
        this.checkoutService.clearShippingMethod();
        console.log(order);
        const navigationExtras: NavigationExtras = { state: order };
        this.router.navigate(['checkout/success'], navigationExtras);
      },
      (err) => {
        this.toast.error(err.message);
        console.error(err);
      }
    );
  }
}

import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket.model';
import { CheckoutService } from '../checkout.service';

declare var Stripe: any;

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent implements AfterViewInit, OnDestroy {
  @Input() checkoutForm!: FormGroup;
  @ViewChild('cardNumber', { static: true }) cardNumberElement!: ElementRef;
  @ViewChild('cardExpiry', { static: true }) cardExpiryElement!: ElementRef;
  @ViewChild('cardCvc', { static: true }) cardCvcElement!: ElementRef;

  stripe: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: any;

  cardHandler = this.onChange.bind(this);

  loading = false;
  spinner = faSpinner;

  cardNumberValid = false;
  cardExpiryValid = false;
  cardCvcValid = false;

  constructor(
    private basketService: BasketService,
    private checkoutService: CheckoutService,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.stripe = Stripe(
      'pk_test_51IxH3EDyHakC0pIh8eVF03jQNroKS6COHRK085vxfPJrFJGoktdacfhwP1qpR6oGedm5DqU0yx6bkHOAOce12UXm00J9wJKt0a'
    );

    const elements = this.stripe.elements();

    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount(this.cardNumberElement.nativeElement);
    this.cardNumber.addEventListener('change', this.cardHandler);

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
    this.cardExpiry.addEventListener('change', this.cardHandler);

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount(this.cardCvcElement.nativeElement);
    this.cardCvc.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy(): void {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  onChange(event: any) {
    if (event.error) {
      this.cardErrors = event.error.message;
    } else {
      this.cardErrors = null;
    }

    switch (event.elementType) {
      case 'cardNumber':
        this.cardNumberValid = event.complete;
        break;
      case 'cardExpiry':
        this.cardExpiryValid = event.complete;
        break;
      case 'cardCvc':
        this.cardCvcValid = event.complete;
        break;

      default:
        break;
    }
  }

  async submitOrder() {
    this.loading = true;
    const basket = this.basketService.currentBasket;
    try {
      const createdOrder = await this.createOrder(basket);
      const paymentResult = await this.confirmPaymentWithStripe(basket);

      if (paymentResult.paymentIntent) {
        this.basketService.deleteBasketById(basket.id);
        this.checkoutService.clearShippingMethod();
        const navigationExtras: NavigationExtras = { state: createdOrder };
        this.router.navigate(['checkout/success'], navigationExtras);
      } else {
        this.toast.error(paymentResult.error.message);
      }

      this.loading = false;
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }

  private async confirmPaymentWithStripe(basket: IBasket) {
    return this.stripe.confirmCardPayment(basket.clientSecret, {
      payment_method: {
        card: this.cardNumber,
        billing_details: {
          name: this.checkoutForm.get('paymentForm')?.get('nameOnCard')?.value,
        },
      },
    });
  }

  private async createOrder(basket: IBasket) {
    return this.checkoutService.createOrder().toPromise();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AccountService } from '../account/account.service';
import { CheckoutService } from './checkout.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IAddressFormValue } from '../shared/models/address.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrderSummary } from '../shared/models/order.model';
import { IDeliveryMethod } from '../shared/models/delivery-method.model';
import { HotToastService } from '@ngneat/hot-toast';

@UntilDestroy()
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  addressChangedSub: Subscription | undefined = Subscription.EMPTY;
  step: number = 0;
  orderSummary$: Observable<IOrderSummary>;
  deliveryMethod$: Observable<IDeliveryMethod>;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private checkoutService: CheckoutService,
    private route: ActivatedRoute,
    private toast: HotToastService
  ) {
    this.checkoutForm = this.createCheckoutForm();
    this.orderSummary$ = this.checkoutService.orderSummary$;
    this.deliveryMethod$ = this.checkoutService.deliveryMethod$;

    this.getAddressFormValues();

    const initialStep = this.route.snapshot.queryParamMap.get('step') ?? '0';
    this.step = +initialStep;
  }

  ngOnInit(): void {
    this.watchAddressFormChanges();
    this.watchDeliveryFormChanges();
    this.getDeliveryMethod();
  }

  private watchAddressFormChanges() {
    this.checkoutForm
      .get('addressForm')
      ?.valueChanges.pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((address: IAddressFormValue) => {
        this.checkoutService.setShippingAddress(address);
      });
  }

  private watchDeliveryFormChanges() {
    this.checkoutForm
      .get('deliveryForm')
      ?.get('deliveryMethod')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((deliveryMethodId: string) => {
        this.checkoutService.setShippingMethod(deliveryMethodId);
      });
  }

  private getDeliveryMethod() {
    this.deliveryMethod$
      .subscribe((deliveryMethod) => {
        if (deliveryMethod.id) {
          this.checkoutForm
            .get('deliveryForm')
            ?.get('deliveryMethod')
            ?.patchValue(deliveryMethod.id.toString(), { emitEvent: false });
        }
      })
      .unsubscribe();
  }

  private createCheckoutForm() {
    return this.fb.group({
      addressForm: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipCode: [null, Validators.required],
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: [null, Validators.required],
      }),
      paymentForm: this.fb.group({
        nameOnCard: [null, Validators.required],
      }),
    });
  }

  getAddressFormValues() {
    this.accountService.getUserAddress().subscribe(
      (address) => {
        if (address) {
          this.checkoutForm.get('addressForm')?.patchValue(address);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  handleStepSelected(selectedIndex: number) {
    if (selectedIndex === 10) {
      this.checkoutService.createPaymentIntent().subscribe(
        () => {
          this.toast.success('Payment intent created successfully.');
        },
        () => {
          this.toast.error('Payment intent creation failed');
        }
      );
    }
  }
}

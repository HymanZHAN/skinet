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

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private checkoutService: CheckoutService,
    private route: ActivatedRoute
  ) {
    this.checkoutForm = this.createCheckoutForm();
    this.orderSummary$ = this.checkoutService.orderSummary$;

    this.getAddressFormValues();

    const initialStep = this.route.snapshot.queryParamMap.get('step') ?? '0';
    this.step = +initialStep;
  }

  ngOnInit(): void {
    this.checkoutForm
      .get('addressForm')
      ?.valueChanges.pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((address: IAddressFormValue) => {
        this.checkoutService.setShippingAddress(address);
      });
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
}

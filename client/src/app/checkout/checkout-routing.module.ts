import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from './checkout-delivery/checkout-delivery.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  { path: '', component: CheckoutComponent },
  { path: 'address', component: CheckoutAddressComponent },
  { path: 'delivery', component: CheckoutDeliveryComponent },
  { path: 'payment', component: CheckoutPaymentComponent },
  { path: 'review', component: CheckoutReviewComponent },
  { path: 'success', component: CheckoutSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}

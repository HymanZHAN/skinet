import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckoutService } from 'src/app/checkout/checkout.service';
import { IOrderSummary } from '../models/order.model';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTotalsComponent {
  orderSummary$: Observable<IOrderSummary>;

  constructor(private checkoutService: CheckoutService) {
    this.orderSummary$ = this.checkoutService.orderSummary$;
  }
}

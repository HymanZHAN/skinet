import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutSuccessComponent {
  order: IOrder | undefined;
  orderLink = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state;
    if (state) {
      this.order = state as IOrder;
      this.orderLink = `/orders/${this.order.id}`;
    } else {
      this.orderLink = `/orders`;
    }
  }
}

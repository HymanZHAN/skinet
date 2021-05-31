import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderSummary } from '../models/order.model';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTotalsComponent {
  @Input() showHints = true;
  @Input() orderSummary$!: Observable<IOrderSummary>;
  @Input() nextButtonLink = '/checkout';
  @Input() nextButtonText = 'Continue to checkout';

  constructor() {}
}

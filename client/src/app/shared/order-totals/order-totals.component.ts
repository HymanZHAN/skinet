import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTotalsComponent {
  @Input() orderSubtotal: number | null = 0;
  @Input() orderShippingFee: number | null = 0;
  @Input() orderTotal: number | null = 0;

  constructor() {}
}

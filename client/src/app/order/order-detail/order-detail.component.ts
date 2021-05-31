import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IOrder, IOrderItem, IOrderSummary } from 'src/app/shared/models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailComponent {
  orderItems$: Observable<IOrderItem[]>;
  orderSummary$!: Observable<IOrderSummary>;

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id') ?? 0;
    const orderId = +idParam;
    this.orderItems$ = this.orderService.orders$.pipe(
      map((orders) => orders.find((order) => order.id === orderId)),
      map((order) => (order ? order.orderItems : []))
    );
    this.orderSummary$ = this.orderService.orders$.pipe(
      map((orders) => orders.find((order) => order.id === orderId)),
      map((order) => this.createOrderSummary(order))
    );
    if (this.orderService.currentOrders.length === 0) {
      this.orderService.loadOrders().subscribe(
        () => {
          console.log('orders loaded');
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  createOrderSummary(order: IOrder | undefined): IOrderSummary {
    if (order) {
      return {
        orderShippingFee: order.shippingPrice,
        orderSubtotal: order.subtotal,
        orderTotal: order.total,
      };
    } else {
      return {
        orderShippingFee: 0,
        orderSubtotal: 0,
        orderTotal: 0,
      };
    }
  }
}

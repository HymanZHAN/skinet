import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IOrder, IOrderItem, IOrderSummary } from 'src/app/shared/models/order.model';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrderService } from '../order.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailComponent {
  orderItems$: Observable<IOrderItem[]>;
  orderSummary$!: Observable<IOrderSummary>;
  order$: Observable<IOrder | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private bcService: BreadcrumbService
  ) {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id') ?? 0;
    const orderId = +idParam;
    this.bcService.set('@orderDetail', ' ');
    this.order$ = this.orderService.orders$.pipe(
      map((orders) => orders.find((order) => order.id === orderId)),
      switchMap((order) => {
        if (!order) {
          this.orderService.loadOrders();
        }
        return of(order);
      })
    );

    this.orderItems$ = this.order$.pipe(map((order) => (order ? order.orderItems : [])));
    this.orderSummary$ = this.order$.pipe(map((order) => this.createOrderSummary(order)));

    if (this.orderService.currentOrders.length === 0) {
      this.orderService.loadOrders();
    }

    this.order$
      .pipe(
        untilDestroyed(this),
        map((order) => {
          if (order) {
            this.bcService.set('@orderDetail', `Order #${order.id} - ${order.status}`);
          }
        })
      )
      .subscribe();
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

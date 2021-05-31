import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../shared/models/order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders$: Observable<IOrder[]>;

  constructor(private orderService: OrderService) {
    this.orders$ = this.orderService.orders$;
  }

  ngOnInit(): void {
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

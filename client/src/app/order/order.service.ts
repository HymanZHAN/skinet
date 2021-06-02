import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;

  private orders = new BehaviorSubject<IOrder[]>([]);
  orders$ = this.orders.asObservable();

  private order = new BehaviorSubject<IOrder | null>(null);
  order$ = this.order.asObservable();

  constructor(private http: HttpClient) {}

  get currentOrders() {
    return this.orders.value;
  }

  loadOrders() {
    return this.http
      .get<IOrder[]>(`${this.baseUrl}/orders`)
      .pipe(map((orders) => this.orders.next(orders)))
      .subscribe(
        () => {},
        (err) => {
          console.error(err);
        }
      );
  }

  loadOrderById(orderId: number) {
    return this.http
      .get<IOrder>(`${this.baseUrl}/orders/${orderId}`)
      .pipe(map((order) => this.order.next(order)));
  }
}

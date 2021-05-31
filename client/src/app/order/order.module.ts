import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [OrderDetailComponent, OrderComponent],
  imports: [CommonModule, OrderRoutingModule, SharedModule],
})
export class OrderModule {}

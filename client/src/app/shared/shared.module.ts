import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { QuantityCountComponent } from './quantity-count/quantity-count.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PaginationComponent,
    PaginationHeaderComponent,
    OrderTotalsComponent,
    QuantityCountComponent,
  ],
  imports: [CommonModule, NzCarouselModule, RouterModule],
  exports: [
    PaginationComponent,
    PaginationHeaderComponent,
    NzCarouselModule,
    OrderTotalsComponent,
    QuantityCountComponent,
  ],
})
export class SharedModule {}

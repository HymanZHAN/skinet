import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { OrderTotalsComponent } from './order-totals/order-totals.component';

@NgModule({
  declarations: [PaginationComponent, PaginationHeaderComponent, OrderTotalsComponent],
  imports: [CommonModule, NzCarouselModule],
  exports: [PaginationComponent, PaginationHeaderComponent, NzCarouselModule, OrderTotalsComponent],
})
export class SharedModule {}

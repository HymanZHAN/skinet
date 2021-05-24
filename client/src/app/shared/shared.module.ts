import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { QuantityCountComponent } from './quantity-count/quantity-count.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    PaginationComponent,
    PaginationHeaderComponent,
    OrderTotalsComponent,
    QuantityCountComponent,
    TextInputComponent,
  ],
  imports: [CommonModule, NzCarouselModule, RouterModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    PaginationComponent,
    PaginationHeaderComponent,
    NzCarouselModule,
    OrderTotalsComponent,
    QuantityCountComponent,
    ReactiveFormsModule,
    TextInputComponent,
  ],
})
export class SharedModule {}

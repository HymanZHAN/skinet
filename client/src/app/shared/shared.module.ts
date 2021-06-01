import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { QuantityCountComponent } from './quantity-count/quantity-count.component';
import { TextInputComponent } from './text-input/text-input.component';
import { StepperComponent } from './stepper/stepper.component';
import { ButtonComponent } from './button/button.component';
import { BasketSummaryComponent } from './basket-summary/basket-summary.component';

@NgModule({
  declarations: [
    PaginationComponent,
    PaginationHeaderComponent,
    OrderTotalsComponent,
    QuantityCountComponent,
    TextInputComponent,
    StepperComponent,
    ButtonComponent,
    BasketSummaryComponent,
  ],
  imports: [
    CommonModule,
    NzCarouselModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CdkStepperModule,
  ],
  exports: [
    PaginationComponent,
    PaginationHeaderComponent,
    NzCarouselModule,
    OrderTotalsComponent,
    QuantityCountComponent,
    ReactiveFormsModule,
    TextInputComponent,
    StepperComponent,
    CdkStepperModule,
    ButtonComponent,
    BasketSummaryComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [PaginationComponent, PaginationHeaderComponent],
  imports: [CommonModule, NzCarouselModule],
  exports: [PaginationComponent, PaginationHeaderComponent, NzCarouselModule],
})
export class SharedModule {}

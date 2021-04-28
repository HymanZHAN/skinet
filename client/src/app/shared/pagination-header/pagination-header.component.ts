import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.scss'],
})
export class PaginationHeaderComponent {
  @Input() totalCount = 0;
  @Input() pageIndex = 1;
  @Input() pageSize = 1;

  constructor() {}
}

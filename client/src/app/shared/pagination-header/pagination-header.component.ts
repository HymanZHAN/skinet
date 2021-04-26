import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.scss'],
})
export class PaginationHeaderComponent implements OnInit {
  @Input() totalCount = 0;
  @Input() pageIndex = 1;
  @Input() pageSize = 1;

  constructor() {}

  ngOnInit(): void {}
}

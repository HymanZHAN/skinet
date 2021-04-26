import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input()
  public set totalCount(value: number) {
    if (value >= 0) {
      this._totalCount = value;
      this.updateState();
    }
  }
  public get totalCount(): number {
    return this._totalCount;
  }
  private _totalCount: number = 0;

  @Input()
  public set pageSize(value: number) {
    if (value > 0) {
      this._pageSize = value;
      this.updateState();
    }
  }
  public get pageSize(): number {
    return this._pageSize;
  }
  private _pageSize: number = 1;

  @Input() pageIndex: number = 1;

  @Output() pageSelected = new EventEmitter<number>();

  isOnFirstPage: boolean = true;
  isOnLastPage: boolean = false;
  pages: number[] = [];
  pageCount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  selectPage(pageIndex: number) {
    this.pageSelected.emit(pageIndex);
    this.isOnFirstPage = pageIndex === 1;
    this.isOnLastPage = pageIndex === this.pageCount;
  }

  goToNextPage() {
    this.selectPage(this.pageIndex + 1);
  }
  goToPrevPage() {
    this.selectPage(this.pageIndex - 1);
  }

  private updateState() {
    const pageCount = Math.ceil(this._totalCount / this.pageSize);
    this.pages = new Array(pageCount).fill(null).map((_, i) => i + 1);
    this.pageCount = this.pages.length;
    this.isOnFirstPage = this.pageIndex === 1;
    this.isOnLastPage = this.pageIndex === this.pageCount;
  }
}

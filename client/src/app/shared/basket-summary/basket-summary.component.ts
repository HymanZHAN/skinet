import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBasket, IBasketItem } from '../models/basket.model';
import { IOrderItem } from '../models/order.model';

interface IProductListItem {
  id: number;
  pictureUrl: string;
  price: number;
  productName: string;
  quantity: number;
}

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketSummaryComponent implements OnInit {
  @Input() readonly = false;
  @Input() items$ = new Observable<IBasketItem[] | IOrderItem[]>();

  basket$: Observable<IBasket> | undefined;
  basketCount$: Observable<number> = of(0);
  products$ = new Observable<IProductListItem[]>();

  @Output() incremented = new EventEmitter<IBasketItem>();
  @Output() decremented = new EventEmitter<IBasketItem>();
  @Output() removed = new EventEmitter<IBasketItem>();

  constructor() {}

  ngOnInit(): void {
    this.products$ = this.items$.pipe(
      map((items) => items.map((item: IBasketItem | IOrderItem) => this.toProductListItem(item)))
    );
  }

  toProductListItem(item: IOrderItem | IBasketItem) {
    return {
      id: item.id,
      pictureUrl: item.pictureUrl,
      price: item.price,
      productName: item.productName,
      quantity: item.quantity,
    } as IProductListItem;
  }

  decrementItemCount(item: IProductListItem) {
    this.decremented.emit(item as IBasketItem);
  }
  incrementItemCount(item: IProductListItem) {
    this.incremented.emit(item as IBasketItem);
  }
  removeItem(item: IProductListItem) {
    this.removed.emit(item as IBasketItem);
  }
}

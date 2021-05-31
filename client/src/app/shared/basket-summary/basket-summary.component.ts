import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../models/basket.model';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketSummaryComponent {
  @Input() readonly = false;

  basket$: Observable<IBasket> | undefined;
  basketCount$: Observable<number> = of(0);

  @Output() incremented = new EventEmitter<IBasketItem>();
  @Output() decremented = new EventEmitter<IBasketItem>();
  @Output() removed = new EventEmitter<IBasketItem>();

  constructor(private basketService: BasketService) {
    this.basket$ = this.basketService.basket$;
    this.basketCount$ = this.basketService.basketItemCount$;
  }

  decrementItemCount(item: IBasketItem) {
    this.decremented.emit(item);
  }
  incrementItemCount(item: IBasketItem) {
    this.incremented.emit(item);
  }
  removeItem(item: IBasketItem) {
    this.removed.emit(item);
  }
}

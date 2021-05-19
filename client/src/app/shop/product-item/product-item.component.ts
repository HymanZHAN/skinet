import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { EMPTY_PRODUCT, IProduct } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() product: IProduct = EMPTY_PRODUCT;

  constructor(private basketService: BasketService) {}

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { EMPTY_PRODUCT, IProduct } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct = EMPTY_PRODUCT;

  constructor() {}

  ngOnInit(): void {}
}

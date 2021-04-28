import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY_PRODUCT, IProduct } from 'src/app/shared/models/product.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    const productId = idParam ? +idParam : 0;
    this.shopService.getProduct(productId).subscribe(
      (product) => {
        this.product = product;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

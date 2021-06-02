import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  productCount = 1;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketService
  ) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    const productId = idParam ? +idParam : 0;
    this.shopService.getProduct(productId).subscribe(
      (product) => {
        this.product = product;
        this.bcService.set('@productDetails', product.name);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  incrementQuantity() {
    this.productCount++;
  }

  decrementQuantity() {
    this.productCount--;
  }

  addProductsToBasket() {
    this.basketService.addItemToBasket(this.product!, this.productCount);
  }
}

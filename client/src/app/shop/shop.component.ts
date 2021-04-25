import { Component, OnInit } from '@angular/core';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  brands: IProductBrand[] = [];
  types: IProductType[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();

    console.log('brands:', this.brands);
  }

  private getProducts() {
    this.shopService.getProducts().subscribe(
      (resp) => {
        this.products = resp.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  private getBrands() {
    this.shopService.getBrands().subscribe(
      (resp) => {
        this.brands = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private getTypes() {
    this.shopService.getTypes().subscribe(
      (resp) => {
        this.types = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

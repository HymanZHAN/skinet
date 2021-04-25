import { Component, OnInit } from '@angular/core';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { IProductSort } from '../shared/models/product-sort.model';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  totalProductCount = 0;
  shownProductCount = 0;
  brands: IProductBrand[] = [];
  brandIdSelected = 0;
  types: IProductType[] = [];
  typeIdSelected = 0;

  sortOptions: IProductSort[] = [
    { name: 'Name: A to Z', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];
  sortSelected = this.sortOptions[0].name;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();

    console.log('brands:', this.brands);
  }

  private getProducts() {
    console.log(this.brandIdSelected);
    this.shopService
      .getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected)
      .subscribe(
        (resp) => {
          this.products = resp.data;
          this.shownProductCount = resp.count <= resp.pageSize ? resp.count : resp.pageSize;
          this.totalProductCount = resp.count;
          console.log(resp);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  private getBrands() {
    this.shopService.getBrands().subscribe(
      (resp) => {
        this.brands = [{ id: 0, name: 'All' }, ...resp];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private getTypes() {
    this.shopService.getTypes().subscribe(
      (resp) => {
        this.types = [{ id: 0, name: 'All' }, ...resp];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortSelected = target.value;
    this.getProducts();
  }
}

import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { IProductSort } from '../shared/models/product-sort.model';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';
import { ProductParams } from '../shared/models/product-params.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  totalProductCount = 0;
  shownProductCount = 0;

  productParams = new ProductParams();

  brands: IProductBrand[] = [];
  types: IProductType[] = [];
  sortOptions: IProductSort[] = [
    { name: 'Name: A to Z', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  private getProducts() {
    this.shopService.getProducts(this.productParams).subscribe(
      (resp) => {
        this.products = resp.data;
        this.shownProductCount = resp.count <= resp.pageSize ? resp.count : resp.pageSize;
        this.totalProductCount = resp.count;
        this.productParams.pageIndex = resp.pageIndex;
        this.productParams.pageSize = resp.pageSize;
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
    this.productParams.brandId = brandId;
    this.productParams.pageIndex = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.productParams.typeId = typeId;
    this.productParams.pageIndex = 1;
    this.getProducts();
  }

  onSortSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.productParams.sort = target.value;
    this.getProducts();
  }

  onPageChanged(newPageIndex: number) {
    this.productParams.pageIndex = newPageIndex;
    this.getProducts();
  }

  onSearch() {
    this.getProducts();
  }

  onReset() {
    this.productParams.search = '';
    this.getProducts();
  }

  onSearchBoxFocusOut() {
    if (!this.productParams.search) {
      this.getProducts();
    }
  }
}

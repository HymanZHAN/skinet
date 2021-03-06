import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { IProductSort } from '../shared/models/product-sort.model';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';
import { ProductParams } from '../shared/models/product-params.model';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit {
  brands$: Observable<IProductBrand[]>;
  types$: Observable<IProductType[]>;
  products$: Observable<IProduct[]>;
  productParams$: Observable<ProductParams>;
  totalProductCount$: Observable<number>;
  vm$: Observable<{
    products: IProduct[];
    productParams: ProductParams;
    totalProductCount: number;
  }>;

  searchTerm$: Observable<string>;
  sortOptions: IProductSort[] = [
    { name: 'Name: A to Z', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private shopService: ShopService) {
    this.brands$ = this.shopService.brands$;
    this.types$ = this.shopService.types$;
    this.products$ = this.shopService.products$;
    this.productParams$ = this.shopService.productParams$;
    this.searchTerm$ = this.productParams$.pipe(map((params) => params.search));
    this.totalProductCount$ = this.shopService.totalProductCount$;
    this.vm$ = combineLatest([this.products$, this.productParams$, this.totalProductCount$]).pipe(
      map((obs) => {
        return { products: obs[0], productParams: obs[1], totalProductCount: obs[2] };
      })
    );
  }

  ngOnInit(): void {
    this.shopService.getBrands().subscribe();
    this.shopService.getTypes().subscribe();
  }

  onBrandSelected(brandId: number) {
    this.shopService.updateProductParams({ brandId, pageIndex: 1 });
  }

  onTypeSelected(typeId: number) {
    this.shopService.updateProductParams({ typeId });
  }

  onSortSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.shopService.updateProductParams({ sort: target.value });
  }

  onPageChanged(pageIndex: number) {
    this.shopService.updateProductParams({ pageIndex });
  }

  onSearch(event: Event) {
    const searchBox = event.target as HTMLInputElement;
    this.shopService.updateProductParams({ search: searchBox.value, pageIndex: 1 });
  }

  onReset() {
    this.shopService.updateProductParams({ search: '' });
  }

  onSearchBoxBlur(event: Event) {
    const searchBox = event.target as HTMLInputElement;
    if (!searchBox.value) {
      this.shopService.updateProductParams({ search: '', pageIndex: 1 });
    }
  }

  trackByProductId(index: number, product: IProduct) {
    return product.id;
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { EMPTY_PRODUCT, IPaginatedProducts, IProduct } from '../shared/models/product.model';

import { distinctUntilChanged, map, scan, switchMap, tap } from 'rxjs/operators';
import { ProductParams } from '../shared/models/product-params.model';
import { environment } from 'src/environments/environment';
import { IPaginatedResponse } from '../shared/models/paginated-response.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;
  cacheKey = '';

  private productParams = new BehaviorSubject<ProductParams>(new ProductParams());
  productParams$ = this.productParams.asObservable().pipe(
    distinctUntilChanged((a, b) => this.isParamsEqual(a, b)),
    tap((params) => {
      this.cacheKey = Object.values(params).join('-');
    })
  );

  private totalProductCount = new BehaviorSubject<number>(0);
  totalProductCount$ = this.totalProductCount.asObservable();

  private products = new Map<string, IPaginatedResponse<IProduct>>();
  products$ = this.productParams$.pipe(
    switchMap(() => {
      const cachedResponse = this.products.get(this.cacheKey);
      if (cachedResponse) {
        this.totalProductCount.next(cachedResponse.count);
        return of(cachedResponse.data);
      }
      return this.getProducts();
    })
  );

  brands: IProductBrand[] = [];
  types: IProductType[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    let params = new HttpParams();
    if (this.productParams.value.brandId) {
      params = params.set('brandId', this.productParams.value.brandId.toString());
    }
    if (this.productParams.value.typeId) {
      params = params.set('typeId', this.productParams.value.typeId.toString());
    }
    if (this.productParams.value.search) {
      params = params.set('search', this.productParams.value.search.toString());
    }
    params = params.set('sort', this.productParams.value.sort);
    params = params.set('pageIndex', this.productParams.value.pageIndex.toString());
    params = params.set('pageSize', this.productParams.value.pageSize.toString());

    return this.http
      .get<IPaginatedProducts>(`${this.baseUrl}/products`, { params })
      .pipe(
        map((resp) => {
          this.totalProductCount.next(resp.count);
          this.products.set(this.cacheKey, resp);
          return resp.data;
        })
      );
  }

  getProduct(id: number) {
    const cachedResponse = this.products.get(this.cacheKey);
    if (cachedResponse) {
      const product = cachedResponse.data.find((p) => p.id === id);
      return product ? of(product) : this.http.get<IProduct>(`${this.baseUrl}/products/${id}`);
    }
    return of(EMPTY_PRODUCT);
  }

  getBrands() {
    if (this.brands.length > 0) {
      return of(this.brands);
    }
    return this.http
      .get<IProductBrand[]>(`${this.baseUrl}/products/brands`)
      .pipe(map((brands) => (this.brands = brands)));
  }

  getTypes() {
    if (this.types.length > 0) {
      return of(this.types);
    }
    return this.http
      .get<IProductType[]>(`${this.baseUrl}/products/types`)
      .pipe(map((types) => (this.types = types)));
  }

  updateProductParams(paramUpdates: Partial<ProductParams>) {
    console.log('updateProductParams');
    const newParams = { ...this.productParams.value, ...paramUpdates };
    this.productParams.next(newParams);
  }

  private isParamsEqual(a: ProductParams, b: ProductParams) {
    return (
      a.brandId === b.brandId &&
      a.pageIndex === b.pageIndex &&
      a.pageSize === b.pageSize &&
      a.search === b.search &&
      a.sort === b.sort &&
      a.typeId === b.typeId
    );
  }
}

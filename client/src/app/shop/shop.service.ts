import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { IPaginatedProducts, IProduct } from '../shared/models/product.model';

import { map } from 'rxjs/operators';
import { ProductParams } from '../shared/models/product-params.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  products$ = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) {}

  getProducts(productParams: ProductParams) {
    let params = new HttpParams();
    if (productParams.brandId) {
      params = params.set('brandId', productParams.brandId.toString());
    }
    if (productParams.typeId) {
      params = params.set('typeId', productParams.typeId.toString());
    }
    if (productParams.search) {
      params = params.set('search', productParams.search.toString());
    }
    params = params.set('sort', productParams.sort);
    params = params.set('pageIndex', productParams.pageIndex.toString());
    params = params.set('pageSize', productParams.pageSize.toString());

    return this.http.get<IPaginatedProducts>(this.baseUrl + 'products', {
      // observe: 'response',
      params,
    });
    // .pipe(map((resp) => resp.body));
  }

  getBrands() {
    return this.http.get<IProductBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }
}

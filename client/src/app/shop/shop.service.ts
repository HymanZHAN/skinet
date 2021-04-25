import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { IPaginatedProducts, IProduct } from '../shared/models/product.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  products$ = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) {}

  getProducts(brandId?: number, typeId?: number, sort?: string) {
    let params = new HttpParams();
    if (brandId) {
      params = params.set('brandId', brandId.toString());
    }
    if (typeId) {
      params = params.set('typeId', typeId.toString());
    }
    if (sort) {
      params = params.set('sort', sort);
    }

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

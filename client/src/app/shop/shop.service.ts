import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProductBrand } from '../shared/models/product-brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { IPaginatedProducts } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IPaginatedProducts>(this.baseUrl + 'products');
  }

  getBrands() {
    return this.http.get<IProductBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }
}

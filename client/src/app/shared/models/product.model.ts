import { IPaginatedResponse } from './paginated-response.model';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productType: string;
  productBrand: string;
}

export const EMPTY_PRODUCT: IProduct = {
  id: 0,
  name: '',
  description: '',
  price: -1,
  pictureUrl: '',
  productType: '',
  productBrand: '',
};

export type IPaginatedProducts = IPaginatedResponse<IProduct>;

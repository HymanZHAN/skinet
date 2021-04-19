import { IPaginatedResponse } from './paginated-response';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productType: string;
  productBrand: string;
}

export type IPaginatedProducts = IPaginatedResponse<IProduct>;

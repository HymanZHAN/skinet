import { IPaginatedResponse } from './paginated-response.model';

export interface IProductBrand {
  id: number;
  name: string;
}

export type IPaginatedBrands = IPaginatedResponse<IProductBrand>;

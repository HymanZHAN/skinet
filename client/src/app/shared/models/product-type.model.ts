import { IPaginatedResponse } from './paginated-response.model';

export interface IProductType {
  id: number;
  name: string;
}

export type IPaginatedTypes = IPaginatedResponse<IProductType>;

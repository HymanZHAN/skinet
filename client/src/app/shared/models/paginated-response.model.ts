export interface IPaginatedResponse<T> {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: T[];
}

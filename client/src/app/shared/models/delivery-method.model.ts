export interface IDeliveryMethod {
  id: number;
  shortName: string;
  deliveryTime: string;
  description: string;
  price: number;
}

export const EMPTY_DELIVERY_METHOD: IDeliveryMethod = {
  id: 0,
  shortName: '',
  deliveryTime: '',
  description: '',
  price: 0,
};

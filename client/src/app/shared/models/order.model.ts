import { IAddress } from './address.model';

export interface IOrderToCreate {
  basketId: string;
  deliveryMethodId: number;
  shipToAddress: IAddress;
}

export interface IOrder {
  id: number;
  buyerEmail: string;
  orderDate: Date;
  shipToAddress: IAddress;
  deliveryMethod: string;
  shippingPrice: number;
  orderItems: IOrderItem[];
  subtotal: number;
  status: string;
  total: number;
  paymentIntentId: string;
}

export interface IOrderItem {
  id: number;
  productName: string;
  price: number;
  productId: number;
  pictureUrl: string;
  quantity: number;
}

export interface IOrderSummary {
  orderSubtotal: number;
  orderShippingFee: number;
  orderTotal: number;
}

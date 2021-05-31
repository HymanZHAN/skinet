export interface IAddress {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IAddressFormValue {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export const EMPTY_ADDRESS: IAddressFormValue = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
};

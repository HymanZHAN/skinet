export interface IUser {
  email: string;
  displayName: string;
  token: string;
}

export const EMPTY_USER: IUser = { displayName: '', email: '', token: '' };

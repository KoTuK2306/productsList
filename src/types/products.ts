import { Product } from "./../interfaces/Product";

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: null | string;
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}
interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: any[];
}
interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction;

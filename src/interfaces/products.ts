import { ProductActionTypes } from "../enums/ProductActionTypes";
import { Product } from "./Product";

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: null | string;
  filteredProducts: Product[];
}

export interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}
export interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}
export interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}
export interface FilterProductAction {
  type: ProductActionTypes.FILTER_PRODUCTS;
  payload: string;
}

export type ProductAction =
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductErrorAction
  | FilterProductAction;

import { ProductActionTypes } from "../enums/ProductActionTypes";
import { SortFields } from "../enums/SortFields";
import { SortTypes } from "../enums/SortTypes";
import { Product } from "./Product";

export type TypesOfSort = SortTypes.ASC | SortTypes.DESC | SortTypes.NONE;

export interface ProductState {
  originalProducts: Product[];
  isLoading: boolean;
  error: null | string;
  filteredProducts: Product[];
  sortType: TypesOfSort;
  sortField: SortFields | null;
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
export interface SortProductAction {
  type: ProductActionTypes.SORT;
  payload: SortFields;
}

export type ProductAction =
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductErrorAction
  | FilterProductAction
  | SortProductAction;

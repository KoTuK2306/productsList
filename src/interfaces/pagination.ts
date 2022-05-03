import { PaginationActionTypes } from "../enums/PaginationActionTypes";

export interface PaginationState {
  productsPerPage: number;
  currentPage: number;
}

export interface SetCurrentPage {
  type: PaginationActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

export interface SetProductsPerPage {
  type: PaginationActionTypes.SET_PRODUCTS_PER_PAGE;
  payload: number;
}

export type PaginationActions = SetCurrentPage | SetProductsPerPage;

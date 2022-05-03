import { PaginationActionTypes } from "../../enums/PaginationActionTypes";
import { SetCurrentPage, SetProductsPerPage } from "../../interfaces/pagination";

export const setCurrentPage = (pageNumber: number): SetCurrentPage => ({
  type: PaginationActionTypes.SET_CURRENT_PAGE,
  payload: pageNumber,
});

export const setProductsPerPage = (numberOfProducts: number): SetProductsPerPage => ({
  type: PaginationActionTypes.SET_PRODUCTS_PER_PAGE,
  payload: numberOfProducts,
});

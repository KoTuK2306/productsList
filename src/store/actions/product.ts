import { ProductAction, ProductActionTypes } from "../../types/products";
import { Product } from "./../../interfaces/Product";

export const doFetchProduct = (): ProductAction => ({ type: ProductActionTypes.FETCH_PRODUCTS });
export const fetchProductSuccess = (data: Product[]): ProductAction => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
export const fetchProductError = (): ProductAction => ({
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
  payload: "Ошибка",
});

export type FetchProductsActions =
  | ReturnType<typeof doFetchProduct>
  | ReturnType<typeof fetchProductSuccess>
  | ReturnType<typeof fetchProductError>;

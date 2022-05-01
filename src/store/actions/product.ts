import { Dispatch } from "redux";
import {
  FetchProductAction,
  FetchProductErrorAction,
  FilterProductAction,
  ProductAction,
} from "../../interfaces/products";
import { ProductActionTypes } from "../../enums/ProductActionTypes";
import { Product } from "../../interfaces/Product";
import { FetchProductSuccessAction } from "./../../interfaces/products";

export const doFetchProduct = (): FetchProductAction => ({ type: ProductActionTypes.FETCH_PRODUCTS });
export const fetchProductSuccess = (data: Product[]): FetchProductSuccessAction => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
export const fetchProductError = (): FetchProductErrorAction => ({
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
  payload: "Ошибка",
});
export const searchProducts = (value: string): FilterProductAction => ({
  type: ProductActionTypes.FILTER_PRODUCTS,
  payload: value,
});

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch(doFetchProduct());
      fetch("https://api.npoint.io/ddd6e2a9b98b85c92294").then((response) =>
        response.json().then((data) => dispatch(fetchProductSuccess(data)))
      );
    } catch {
      dispatch(fetchProductError());
    }
  };
};

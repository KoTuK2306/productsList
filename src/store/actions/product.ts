import { Dispatch } from "redux";
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

type FetchProductsActions =
  | ReturnType<typeof doFetchProduct>
  | ReturnType<typeof fetchProductSuccess>
  | ReturnType<typeof fetchProductError>;

export const fetchProducts = () => {
  return async (dispatch: Dispatch<FetchProductsActions>) => {
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

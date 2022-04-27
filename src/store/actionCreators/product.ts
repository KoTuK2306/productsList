import { Dispatch } from "redux";
import { doFetchProduct, FetchProductsActions, fetchProductSuccess } from "../actions/product";
import { fetchProductError } from "./../actions/product";

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

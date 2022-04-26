import axios from "axios";
import { Dispatch } from "redux";
import { ProductAction, ProductActionTypes } from "../../types/products";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS });
      const response = await axios.get("https://api.npoint.io/ddd6e2a9b98b85c92294");
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Ошибка",
      });
    }
  };
};

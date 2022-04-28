import { ProductActionTypes } from "../../enums/ProductActionTypes";
import { ProductAction, ProductState } from "../../interfaces/products";

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { isLoading: true, error: null, products: [] };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { isLoading: false, error: null, products: action.payload };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { isLoading: true, error: action.payload, products: [] };
    default:
      return state;
  }
};

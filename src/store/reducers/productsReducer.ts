import { ProductAction, ProductActionTypes, ProductState } from "../../types/products";

const initialState: ProductState = {
  products: [],
  isLoaded: false,
  error: null,
};

export const productsReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { isLoaded: true, error: null, products: [] };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { isLoaded: false, error: null, products: action.payload };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { isLoaded: true, error: action.payload, products: [] };
    default:
      return state;
  }
};

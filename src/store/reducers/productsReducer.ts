import { ProductActionTypes } from "../../enums/ProductActionTypes";
import { SortTypes } from "../../enums/SortTypes";
import { ProductAction, ProductState } from "../../interfaces/products";
import { sortProducts } from "../../utils/sortProducts";

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
  filteredProducts: [],
  sortType: SortTypes.ASC,
  sortField: null,
};

export const productsReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { ...state, isLoading: true };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, filteredProducts: action.payload, isLoading: false, products: action.payload };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, isLoading: true, error: action.payload, products: [] };
    case ProductActionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter((product) =>
          product.customer.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case ProductActionTypes.SORT:
      return {
        ...state,
        sortType: state.sortType === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC,
        sortField: action.payload,
        filteredProducts: sortProducts(state.filteredProducts, state.sortType, action.payload),
      };
    default:
      return state;
  }
};

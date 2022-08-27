import { ProductActionTypes } from "../../enums/ProductActionTypes";
import { SortTypes } from "../../enums/SortTypes";
import { ProductAction, ProductState, TypesOfSort } from "../../interfaces/products";
import { sortProducts } from "../../utils/sortProducts";

const initialState: ProductState = {
  originalProducts: [],
  isLoading: false,
  error: null,
  filteredProducts: [],
  sortType: SortTypes.NONE,
  sortField: null,
};

const toggleSortType = (sortType: TypesOfSort) => {
  switch (sortType) {
    case SortTypes.NONE:
      return SortTypes.ASC;
    case SortTypes.ASC:
      return SortTypes.DESC;
    case SortTypes.DESC:
      return SortTypes.NONE;
  }
};

export const productsReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { ...state, isLoading: true };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        filteredProducts: action.payload,
        isLoading: false,
        originalProducts: [...action.payload],
      };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, isLoading: true, error: action.payload };
    case ProductActionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.originalProducts.filter((product) =>
          product.customer.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case ProductActionTypes.SORT:
      return {
        ...state,
        sortType: toggleSortType(state.sortType),
        filteredProducts: sortProducts(
          state.originalProducts,
          state.filteredProducts,
          toggleSortType(state.sortType),
          action.payload
        ),
        sortField: action.payload,
      };
    default:
      return state;
  }
};

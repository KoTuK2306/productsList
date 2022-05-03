import { PaginationActionTypes } from "../../enums/PaginationActionTypes";
import { PaginationActions, PaginationState } from "../../interfaces/pagination";

const initialState: PaginationState = {
  productsPerPage: 10,
  currentPage: 1,
};

export const paginationReducer = (state = initialState, action: PaginationActions): PaginationState => {
  switch (action.type) {
    case PaginationActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case PaginationActionTypes.SET_PRODUCTS_PER_PAGE:
      return { ...state, productsPerPage: action.payload };
    default:
      return state;
  }
};

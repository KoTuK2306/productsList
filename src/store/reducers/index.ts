import { combineReducers } from "redux";
import { paginationReducer } from "./paginationReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  pagination: paginationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

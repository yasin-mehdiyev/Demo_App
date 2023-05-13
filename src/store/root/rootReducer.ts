import { combineReducers } from "redux";

// Slices
import productReducer from "../features/Product/ProductSlice";

export const rootReducer: any = combineReducers({
  products: productReducer,
});

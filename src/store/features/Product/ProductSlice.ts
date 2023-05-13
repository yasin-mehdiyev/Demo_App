import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root/store";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setAllProducts } = productSlice.actions;

export const selectProductSlice = (state: RootState) => state.products.products;

export default productSlice.reducer;

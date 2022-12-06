import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  addProducts: [],
};

export const counterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    filteraddProduct: (state, action) => {
      state.addProducts = [...action.payload, ...state.addProducts];
    },
  },
});

export const { filterProducts, filteraddProduct } = counterSlice.actions;

export default counterSlice.reducer;

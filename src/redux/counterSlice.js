import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { filterProducts } = counterSlice.actions;

export default counterSlice.reducer;

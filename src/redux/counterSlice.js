import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  addProducts: [],
  users: [],
  cart: [],
  searchProduct: [],
  login: false,
};

export const counterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    filtercart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    filteraddProduct: (state, action) => {
      state.addProducts = [...action.payload, ...state.addProducts];
    },
    filterusers: (state, action) => {
      state.users = [action.payload, ...state.users];
    },
    filterclearProduct: (state) => {
      state.addProducts = [];
    },
    filterlogin: (state, action) => {
      state.login = action.payload;
    },
    filtersearchproduct: (state, action) => {
      state.searchProduct = action.payload;
    },
  },
});

export const {
  filterProducts,
  filteraddProduct,
  filterclearProduct,
  filterusers,
  filtercart,
  filterlogin,
  filtersearchproduct,
} = counterSlice.actions;

export default counterSlice.reducer;

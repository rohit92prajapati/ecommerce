import { configureStore } from "@reduxjs/toolkit";
import filterProduct from "./counterSlice";

export const store = configureStore({
  reducer: {
    filterProduct: filterProduct,
  },
});

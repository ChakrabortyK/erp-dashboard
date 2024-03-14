import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products";
import orderSlice from "./orders";

const store = configureStore({
  reducer: {
    products: productSlice,
    orders: orderSlice,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
// import { itemProducts } from "../data/products";
const initialState = {
  products: [],
};
// console.log("stetet", initialState.products);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Add reducers for handling state changes
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload
      );
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.productId === action.payload.productId) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      // console.log("addProduct", action.payload);
    },
  },
});

export const { setProducts, deleteProduct, updateProduct, addProduct } =
  productSlice.actions;
export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    updateOrder: (state, action) => {
      state.orders = state.orders.map((order) => {
        if (order.orderId === action.payload.orderId) {
          return action.payload;
        } else {
          return order;
        }
      });
    },
  },
});

export const { setOrders, updateOrder } = orderSlice.actions; //used by components
export default orderSlice.reducer; //used by store

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
export const storeSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      // state.cartItems.push({ ...actions.payload, qtty: 1 });
      state.cartItems = [...state.cartItems, { ...actions.payload, qtty: 1 }];
      state.cartItems = state.cartItems.reduce((acc, e) => {
        const found = acc.find((x) => e.id === x.id);
        found ? (found.qtty += e.qtty) : acc.push(e);
        return acc;
      }, []);
    },
    removeFromCart: (state, actions) => {
      state.cartItems = state.cartItems.filter((ele) => {
        return ele.id !== actions.payload.id;
      });
    },
  },
});

export const { addToCart, removeFromCart } = storeSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { storeSlice } from "./storeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: storeSlice.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter = state.counter + 1;
    },
    decrementCounter: (state) => {
      if (state.counter > 0) {
        state.counter = state.counter - 1;
      }
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

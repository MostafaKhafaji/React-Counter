import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  cartCounter: 0,
};
export const storeSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //adding item to cart
    addToCart: (state, actions) => {
      state.cartItems.push({ ...actions.payload, qtty: 1 });
      state.cartCounter++;
      // state.cartItems = [...state.cartItems, { ...actions.payload, qtty: 1 }];
      state.cartItems = state.cartItems.reduce((acc, e) => {
        const found = acc.find((x) => e.id === x.id);
        found ? (found.qtty += e.qtty) : acc.push(e);
        return acc;
      }, []);
    },

    //removing item from cart
    removeFromCart: (state, actions) => {
      state.cartItems = state.cartItems.filter((ele) => {
        return ele.id !== actions.payload.id;
      });
      state.cartCounter = state.cartCounter - actions.payload.qtty;
    },

    //increment the quantity
    incQtty: (state, actions) => {
      state.cartItems.forEach((element) => {
        if (element.id === actions.payload.id) {
          state.cartCounter++;
          element.qtty++;
        }
      });
    },

    //decrement the quantity
    decQtty: (state, actions) => {
      state.cartItems.forEach((element) => {
        if (element.id === actions.payload.id) {
          state.cartCounter--;
          if (element.qtty === 1) {
            state.cartItems = state.cartItems.filter((item) => {
              return item.id !== element.id;
            });
          }
          element.qtty--;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, incQtty, decQtty } =
  storeSlice.actions;

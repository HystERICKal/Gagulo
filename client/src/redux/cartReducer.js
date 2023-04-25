import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      //action like 'clicking AddToCart button'
      // First check if the item has been added to cart before, if it has,
      //     then don't add it again, instead, just increase it's quantity

      const item = state.products.find((item) => item.id === action.payload.id);

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //In short, redux-toolkit allows pushing items directly like this and
      //    changing object property like shown below since it uses a library called immutable js
      if (item) {
        //Increment the item that already exists in cart
        item.quantity += action.payload.quantity; //change object property
      } else {
        state.products.push(action.payload); //push item to cart
      }

      //   state.value += 1;
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      ); //delete item

      //   state.value -= 1;
    },
    resetCart: (state) => {
      state.products = [];
      //   state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

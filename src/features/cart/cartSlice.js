import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].quantity < 10) {
        state.cart[itemIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (itemIndex >= 0 && state.cart[itemIndex].quantity === 1) {
        state.cart.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;

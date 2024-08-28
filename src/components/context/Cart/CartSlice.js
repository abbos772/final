import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        state.value[index].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    incrementCartQuantity: (state, action) => {
      let index = state.value.findIndex((el) => el.id === action.payload);
      if (index >= 0) {
        state.value[index].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    decrementCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload);
      if (index >= 0 && state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    removeFromCart: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },

    clearCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementCartQuantity,
  decrementCart,
  deleteAllCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const currentItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      currentItem.quantity++;
      currentItem.totalPrice = currentItem.quantity * currentItem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const currentItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      currentItem.quantity--;
      currentItem.totalPrice = currentItem.quantity * currentItem.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

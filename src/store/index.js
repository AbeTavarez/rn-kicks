import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './productSlice';
import { cartSlide } from './cartSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlide.reducer
  }
});

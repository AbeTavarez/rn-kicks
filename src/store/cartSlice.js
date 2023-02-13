import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200
};

export const cartSlide = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload;
      state.items.push({ product: newProduct, quantity: 1 });
    },
    changeQuantity: (state, action) => {}
  }
});

import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products';

const initialState = {
  products: productsData,
  selectedProduct: null
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find(
        (product) => product.id === productId
      );
    }
  }
});

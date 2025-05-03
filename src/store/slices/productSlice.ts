import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 6768777,
      name: "Charger",
      sku: "CH24",
      category: "Electronics",
      costPrice: 20,
      sellingPrice: 30,
      currentQty: 50,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((data) =>
        data.id === action.payload.id ? { ...data, ...action.payload } : data
      );
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (data) => data.id !== action.payload.id
      );
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productApi";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await getProducts();
    return res;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;

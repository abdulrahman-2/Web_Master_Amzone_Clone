import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productApi";

const initialState = {
  products: [],
  loading: false,
  error: "",
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
        state.error = "";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

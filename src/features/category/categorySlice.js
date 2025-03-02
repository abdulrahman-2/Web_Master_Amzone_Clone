import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoryApi";

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const res = await getCategories();
    return res;
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;

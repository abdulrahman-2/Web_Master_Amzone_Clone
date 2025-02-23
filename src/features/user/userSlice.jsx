import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userApi";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  error: false,
};

export const fetchUser = createAsyncThunk("user/getUser", async () => {
  const res = await getUser();
  return res;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;

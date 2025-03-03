import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: localStorage.getItem("fav")
    ? JSON.parse(localStorage.getItem("fav"))
    : [],
};

const FavSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      if (state.fav.some((item) => item.id === action.payload.id)) return;
      state.fav = [...state.fav, action.payload];
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
    removeFromFav: (state, action) => {
      state.fav = state.fav.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
  },
});

export const { addToFav, removeFromFav } = FavSlice.actions;

export default FavSlice.reducer;

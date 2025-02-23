import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import categoryReducer from "../features/category/categorySlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    user: userReducer,
  },
});

export default store;

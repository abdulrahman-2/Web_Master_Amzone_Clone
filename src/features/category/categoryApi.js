import axios from "axios";

export const getCategories = async () => {
  const res = await axios.get("https://dummyjson.com/products/category-list");
  const data = await res.data();
  return data;
};

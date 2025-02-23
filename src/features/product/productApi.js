import axios from "axios";

export const getProducts = async (category) => {
  const res = await axios.get(
    category
      ? `https://dummyjson.com/products/category/${category}?limit=0`
      : `https://dummyjson.com/products?limit=0`
  );

  const data = await res.data;
  return data;
};

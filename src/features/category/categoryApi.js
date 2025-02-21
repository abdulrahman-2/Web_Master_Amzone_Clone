export const getCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/category-list");
  const data = await res.json();
  return data;
};

export const getProducts = async (category) => {
  const res = await fetch(
    category
      ? `https://dummyjson.com/products/category/${category}?limit=0`
      : `https://dummyjson.com/products?limit=0`
  );

  const data = await res.json();
  return data;
};

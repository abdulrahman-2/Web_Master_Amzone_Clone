import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/category/categorySlice";
import { fetchProducts } from "../features/product/productSlice";

const ProductCategories = () => {
  const dispatch = useDispatch();
  const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);
  const { products, loading: productsLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    categories.forEach((category) => {
      dispatch(fetchProducts(category));
    });
  }, [categories, dispatch]);

  return (
    <div>
      <div className="container mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-2">
        {categoriesLoading ? (
          [...Array(3)].map((_, index) => (
            <section key={index} className="bg-white p-5 rounded-sm shadow-md animate-pulse">
              <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-300 rounded"></div>
                ))}
              </div>
            </section>
          ))
        ) : (
          categories.map((category) => (
            <section key={category} className="bg-white p-5 rounded-sm shadow-md">
              <h2 className="text-xl font-bold mb-3 capitalize">{category.replace("-", " ")}</h2>
              <div className="grid grid-cols-2 gap-3">
                {productsLoading ? (
                  [...Array(4)].map((_, i) => (
                    <div key={i} className="border rounded-lg overflow-hidden shadow-sm animate-pulse">
                      <div className="w-full h-32 bg-gray-300"></div>
                      <div className="p-3">
                        <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 w-12 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  products
                    .filter((product) => product.category === category)
                    .slice(0, 4)
                    .map((product) => (
                      <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-3">
                          <h3 className="text-sm font-semibold">{product.title}</h3>
                          <p className="text-gray-600 text-sm">${product.price}</p>
                        </div>
                      </div>
                    ))
                )}
              </div>
              <a href="#" className="text-blue-500 mt-3 block text-sm font-semibold">See more</a>
            </section>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCategories;
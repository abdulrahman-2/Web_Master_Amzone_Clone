import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../features/product/productSlice";
import ProductCard from "../components/shared/ProductCard";

const Categories = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-10 uppercase border-b-4 border-primary w-fit mx-auto">
        {category.replace("-", " ")} Products
      </h1>
      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Categories;

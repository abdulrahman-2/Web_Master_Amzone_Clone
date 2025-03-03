import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/shared/ProductCard";

const priceList = [
  { id: 1, from: 0, to: 100, label: "0 - 100" },
  { id: 2, from: 100, to: 200, label: "100 - 200" },
  { id: 3, from: 200, to: 300, label: "200 - 300" },
  { id: 4, from: 300, to: 400, label: "300 - 400" },
  { id: 5, from: 400, to: 500, label: "400 - 500" },
];

const Shop = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  // State for filters
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [deliveryToday, setDeliveryToday] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    let matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    let matchesPrice = selectedPrice
      ? product.price >= selectedPrice.from && product.price <= selectedPrice.to
      : true;
    let matchesRating = selectedRating
      ? product.rating >= selectedRating
      : true;
    let matchesDelivery = deliveryToday ? product.deliveryToday === true : true;

    return matchesBrand && matchesPrice && matchesRating && matchesDelivery;
  });

  // Reset Filters
  const resetFilters = () => {
    setSelectedBrand("");
    setSelectedPrice(null);
    setSelectedRating(null);
    setDeliveryToday(false);
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-7 gap-4">
      <div className="md:h-screen md:sticky top-3">
        <div className="flex flex-col gap-7 md:col-span-1 bg-gray-100 p-4">
          {/* Delivery Filter */}
          <div>
            <h2 className="font-semibold text-xl mb-2">Delivery Day</h2>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                checked={deliveryToday}
                onChange={(e) => setDeliveryToday(e.target.checked)}
              />
              <span>Get it in 2 Today</span>
            </div>
          </div>

          {/* Ratings Filter */}
          <div>
            <h2 className="font-semibold text-xl mb-2">Customer Reviews</h2>
            {[5, 4, 3, 2].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <input
                  id={`rating-${rating}`}
                  type="radio"
                  name="rating"
                  onChange={() => setSelectedRating(rating)}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor={`rating-${rating}`} className="cursor-pointer">
                  {"⭐".repeat(rating)} & up
                </label>
              </div>
            ))}
          </div>

          {/* Brands Filter */}
          <div>
            <h2 className="font-semibold text-xl mb-2">Brands</h2>
            <div className="flex flex-col gap-2">
              {Array.from(new Set(products.map((p) => p.brand)))
                .filter((brand) => brand)
                .slice(0, 10)
                .map((brand) => (
                  <div key={brand} className="flex items-center gap-2">
                    <input
                      id={brand}
                      type="radio"
                      name="brand"
                      value={brand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor={brand} className="cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h2 className="font-semibold text-xl mb-2">Price</h2>
            <div className="flex flex-col gap-2">
              {priceList.map((p) => (
                <div key={p.id} className="flex items-center gap-2">
                  <input
                    id={`price-${p.id}`}
                    type="radio"
                    name="price"
                    onChange={() => setSelectedPrice(p)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor={`price-${p.id}`} className="cursor-pointer">
                    {p.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Reset Filters */}
          <button
            className="bg-primary text-black font-semibold py-2 px-4 rounded-lg"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Product Listing */}
      <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products match your filters</p>
        )}
      </div>
    </div>
  );
};

export default Shop;

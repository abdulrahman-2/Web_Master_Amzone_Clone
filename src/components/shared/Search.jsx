import { useEffect, useState, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { categories = [] } = useSelector((state) => state.categories);
  const { products = [] } = useSelector((state) => state.products);

  const debouncedFilter = useCallback(
    debounce(() => {
      let results = products;

      if (selectedCategory && selectedCategory !== "All") {
        results = results.filter(
          (product) => product.category === selectedCategory
        );
      }

      if (searchQuery) {
        results = results.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredProducts(results);
    }, 300),
    [products, selectedCategory, searchQuery]
  );

  useEffect(() => {
    debouncedFilter();
    return () => debouncedFilter.cancel();
  }, [debouncedFilter]);

  return (
    <div className="flex items-center relative">
      <select
        name="categories"
        id="categories"
        className="bg-[#E3E6E6] cursor-pointer h-[38px] p-2 rounded-s-md w-16 text-xs border-[2px] border-transparent outline-none focus-visible:border-amazon_orange"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search Amazon"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-[38px] w-full p-2 border-[2px] border-transparent outline-none focus-visible:border-amazon_orange"
      />

      {searchQuery && (
        <button
          aria-label="Clear search"
          className="absolute right-16 cursor-pointer"
          onClick={() => setSearchQuery("")}
        >
          <HiMiniXMark size={22} />
        </button>
      )}

      <div className="bg-primary hover:bg-amazon_orangeDark cursor-pointer duration-300 h-[38px] py-2 px-4 rounded-e-md">
        <IoSearch size={20} />
      </div>

      {searchQuery && (
        <div className="absolute top-[38px] w-full z-50 bg-white shadow-sm rounded-md p-4 max-h-[400px] overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  width={80}
                  height={80}
                />
                <p>{product.title}</p>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              {searchQuery ? "No results found" : "Start typing to search"}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

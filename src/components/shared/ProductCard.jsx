import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title.substring(0, 12)}... added to cart`);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-4">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
        <p className="text-xs text-gray-500">{product.category}</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="text-blue-600 text-sm">{product.rating}</span>
        </div>
        <p className="text-gray-500 text-sm">
          Stock: {product.availabilityStatus}
        </p>
        <p className="text-lg font-semibold mt-1">
          ₹{product.price}{" "}
          <span className="text-green-600 text-sm">
            {product.discountPercentage}% off
          </span>
        </p>
        <p className="text-gray-600 text-xs">{product.shippingInformation}</p>
        <p className="text-green-600 text-sm font-medium">
          {product.returnPolicy}
        </p>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-primary rounded-full font-semibold text-black px-4 py-2 w-full mt-3 hover:bg-yellow-400 transition duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

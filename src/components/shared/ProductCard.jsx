import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { addToFav, removeFromFav } from "../../features/fav/favSlice";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const isProductInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = (product) => {
    const discountedPrice = Math.round(
      product.price * (1 - product.discountPercentage / 100)
    );
    dispatch(addToCart({ ...product, price: discountedPrice }));
    toast.success(`${product.title.substring(0, 12)}... added to cart`);
  };

  const { fav } = useSelector((state) => state.fav);

  const isProductInFav = fav.some((item) => item.id === product.id);

  const handleHeartClick = (product) => {
    isProductInFav
      ? dispatch(removeFromFav(product))
      : dispatch(addToFav(product));
    toast.success(`${product.title.substring(0, 12)}... added to favorites`);
  };

  return (
    <div className="relative h-[510px] border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-4">
      <FaHeart
        onClick={() => handleHeartClick(product)}
        className={`absolute top-3 right-3 text-2xl cursor-pointer z-30 ${
          isProductInFav ? "text-red-500" : ""
        }`}
      />
      <Link to={`/product/${product.id}`}>
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
          <span className="text-secondary text-sm">{product.rating}</span>
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
          {isProductInCart ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

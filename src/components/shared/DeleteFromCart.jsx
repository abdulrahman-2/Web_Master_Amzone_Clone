import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

const DeleteFromCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch(removeFromCart(product));
    toast.success(`${product.title.substring(0, 12)}... removed from cart`);
  };
  return (
    <button
      className="text-red-500 text-xs font-semibold"
      onClick={() => handleDelete(product)}
    >
      Delete
    </button>
  );
};

export default DeleteFromCart;

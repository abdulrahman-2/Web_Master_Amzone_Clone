import cartIcon from "../../assets/cartIcon.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBtn = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <Link
      to="/cart"
      className="relative text-white lg:headerItem lg:h-[90%] font-semibold flex"
    >
      <img
        src={cartIcon}
        alt="cart"
        className="w-auto h-6 lg:h-10 object-cover"
      />
      <span className="self-end hidden lg:flex">Cart</span>
      <span className="absolute right-[9px] lg:right-[51px] -top-2 lg:top-0 font-semibold text-primary">
        {cart.length}
      </span>
    </Link>
  );
};

export default CartBtn;

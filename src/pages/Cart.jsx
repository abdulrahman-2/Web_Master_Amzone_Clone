import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../features/cart/cartSlice";
import ChangeQuantity from "../components/shared/ChangeQuantity";
import DeleteFromCart from "../components/shared/DeleteFromCart";
import emptyCart from "../assets/emptyCart.png";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axiosInstance.post("/payments", {
      products: cart,
    });

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.sessionId,
    });

    if (result?.error) {
      toast.error(result.error.message);
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="bg-gray-100">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen -mt-28">
          <img
            src={emptyCart}
            alt="empty cart"
            className="w-96 h-96 object-contain"
          />
          <h1 className="text-2xl font-bold -mt-20">Your Cart is Empty</h1>
          <Link to="/" className="text-bgLight">
            Return to Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="container mx-auto py-5 flex flex-col-reverse lg:flex-row items-start gap-6 p-3">
            <div className="w-full md:flex-1">
              <div className="bg-white rounded">
                <div className="justify-between p-5 hidden md:flex">
                  <h2 className="font-semibold text-3xl">Shopping Cart</h2>
                  <span className="self-end">Price</span>
                </div>
                <hr className="hidden md:flex" />

                <div className="flex flex-col gap-5 p-5">
                  {cart.map((item) => (
                    <div key={item?.id} className="flex gap-3 md:gap-5">
                      <Link href={`/products/${item?.id}`}>
                        <div className="relative bg-gray-200 w-28 h-28 md:w-40 md:h-40 rounded-md">
                          <img
                            src={item?.images[0]}
                            alt="product image"
                            className="w-full h-full object-contain col-span-1"
                          />
                        </div>
                      </Link>
                      <div className="flex-1">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col md:flex-row gap-2 justify-between">
                            <p className="font-semibold text-base md:text-xl">
                              {item?.title}
                            </p>
                            <span className="text-base md:text-xl font-bold">
                              <sup>EGP</sup>
                              {Math.ceil(item?.price * item?.quantity)}
                            </span>
                          </div>
                          <div className="text-xs text-green-500">
                            {item?.stock >= 5
                              ? "In Stock"
                              : `Only ${item?.stock} Stock`}
                          </div>
                          <p className="text-xs text-gray-600">
                            Eligible for FREE delivery
                          </p>
                          <p className="text-xs font-semibold">
                            Unit Price:{" "}
                            <span className="font-bold">
                              <sup>EGP</sup>
                              {item.price}
                            </span>
                          </p>
                          <p className="text-xs font-semibold">
                            Unit Count:{" "}
                            <span className="font-bold">{item.quantity}</span>
                          </p>
                          <div className="flex items-center gap-3">
                            <ChangeQuantity item={item} />
                            <span className="hidden md:block text-[#007185]/30">
                              |
                            </span>
                            <DeleteFromCart product={item} />
                            <span className="hidden md:block text-[#007185]/30">
                              |
                            </span>
                            <button className="hidden md:block text-[#007185] text-xs font-semibold">
                              Save for Later
                            </button>
                            <span className="hidden md:block text-[#007185]/30">
                              |
                            </span>
                            <button className="hidden md:block text-[#007185] text-xs font-semibold">
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="ml-auto mt-5 block bg-white mb-5 p-2 rounded-lg duration-200 hover:bg-black hover:text-white font-semibold"
                onClick={() => dispatch(resetCart())}
              >
                Reset Cart
              </button>
            </div>

            <div className="w-full md:w-[300px] ml-auto bg-white p-5 rounded">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-xl">Cart Summary</h2>
                <hr />
                <p className="text-lg">
                  Subtotal ({cart.length} items):{" "}
                  <span className="font-bold">
                    <sup>EGP</sup>
                    {totalPrice}
                  </span>
                </p>
                <button
                  onClick={handleCheckout}
                  className="w-full text-center rounded-full bg-primary font-semibold py-2 mt-3"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

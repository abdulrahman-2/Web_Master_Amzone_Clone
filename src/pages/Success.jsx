import { Link, useSearchParams } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../features/cart/cartSlice";

function Success() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      dispatch(resetCart());
    }
  }, [dispatch, searchParams]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center p-3">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center max-w-md">
        <MdCheckCircle className="w-28 h-28 text-green-500 mx-auto my-6" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Payment Done!
        </h3>
        <p className="text-gray-800 dark:text-white my-2">
          Thank you for completing your secure online payment.
        </p>
        <p className="text-gray-800 dark:text-white">Have a great day!</p>
        <div className="flex flex-col gap-4 py-10">
          <Link
            to="/"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;

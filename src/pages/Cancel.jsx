import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";

function Cancel() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center p-3">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center max-w-md">
        <MdCancel className="w-28 h-28 text-red-500 mx-auto my-6" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Payment Canceled
        </h3>
        <p className="text-gray-800 dark:text-white my-2">
          Your payment was not completed. If this was a mistake, you can try
          again.
        </p>
        <p className="text-gray-800 dark:text-white">
          Feel free to reach out for support.
        </p>
        <div className="flex flex-col gap-4 py-10">
          <Link
            to="/cart"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cancel;

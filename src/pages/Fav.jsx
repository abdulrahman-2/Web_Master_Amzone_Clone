import { useSelector } from "react-redux";
import ProductCard from "../components/shared/ProductCard";
import emptyWishlist from "../assets/emptyWishlist.png";
import { Link } from "react-router-dom";

const Fav = () => {
  const { fav, loading, error } = useSelector((state) => state.fav);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 text-2xl font-bold">Error: {error}</p>
        <Link href="/" className="text-primary font-semibold mt-2">
          Return to Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-10 uppercase border-b-4 border-primary w-fit mx-auto">
        Your Favorites
      </h1>

      {fav.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen -mt-28">
          <img
            src={emptyWishlist}
            alt="empty wishlist"
            width={300}
            height={300}
            className="w-96 h-96 object-contain"
          />
          <h1 className="text-2xl font-bold -mt-20">Your Favorites is Empty</h1>
          <Link to="/shop" className="text-primary font-semibold">
            Return to Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fav.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Fav;

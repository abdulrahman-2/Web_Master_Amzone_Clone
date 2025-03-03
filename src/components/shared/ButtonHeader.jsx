import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { logout } from "../../features/user/userSlice";

const ButtonHeader = () => {
  const { categories } = useSelector((state) => state.categories);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    toast.success("Signed out successfully");
  };

  return (
    <div>
      <div className="flex items-center gap-4 w-full text-white">
        <div className="hidden md:flex items-center gap-2">
          <Sidebar />
        </div>
        <Link to="/shop" className="headerItem h-full flex-shrink-0 px-3">
          All
        </Link>
        {categories.slice(0, 10).map((category) => (
          <Link
            to={`/category/${category}`}
            key={category}
            className="headerItem h-full flex-shrink-0"
          >
            {category}
          </Link>
        ))}
        <Link to="/sell" className="headerItem h-full flex-shrink-0">
          Sell
        </Link>
        <Link to="/help" className="headerItem h-full flex-shrink-0">
          Help
        </Link>
        {user && (
          <button onClick={handleSignOut} className="font-semibold">
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonHeader;

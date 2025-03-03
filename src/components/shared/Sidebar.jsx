import { useState, useEffect, useMemo } from "react";
import { IoMenu } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import egyptFlag from "../../assets/egypt.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const { categories } = useSelector((state) => state.categories);
  const { user } = useSelector((state) => state.user);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleToggleCategories = () => {
    setShowAll(!showAll);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Prevent body from scrolling when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up function to remove class when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  // Memoize displayed categories for performance
  const displayedCategories = useMemo(
    () => (showAll ? categories : categories.slice(0, 4)),
    [showAll, categories]
  );

  const handleLogout = () => {};

  const handleLogin = () => {};

  return (
    <div>
      <IoMenu
        size={35}
        className="text-white cursor-pointer"
        onClick={handleOpen}
        aria-expanded={open}
        aria-controls="sidebar"
      />

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleClose}
          role="presentation"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed top-0 left-0 h-full overflow-y-scroll w-[300px] md:w-[350px] bg-white shadow-md z-50 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {user ? (
          <div className="p-3 h-[50px] relative w-full bg-bgLight flex items-center justify-between">
            <div className="font-bold text-white flex items-center gap-2">
              <h3 className="text-lg font-semibold">
                Hello, {`${user.name.substring(0, 12)}...`}
              </h3>
            </div>
            <HiMiniXMark
              size={35}
              className="cursor-pointer text-white absolute z-20 right-1"
              onClick={handleClose}
              aria-label="Close sidebar"
            />
          </div>
        ) : (
          <div className="p-6 h-[50px] w-full bg-bgLight flex items-center justify-between">
            <span className="font-bold text-white flex items-center gap-2">
              <BsPersonCircle size={25} /> Hello, sign in
            </span>
            <HiMiniXMark
              size={35}
              className="cursor-pointer text-white"
              onClick={handleClose}
              aria-label="Close sidebar"
            />
          </div>
        )}
        <div className="text-black overflow-y-auto">
          {/* Sidebar content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Trending</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-black text-sm">Best Sellers</li>
              <li className="text-black text-sm">New Release</li>
              <li className="text-black text-sm">Movers & Shakers</li>
            </ul>
          </div>
          <hr />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Shop by Category</h3>
            <ul className="flex flex-col gap-3">
              {displayedCategories.map((category) => (
                <Link
                  to={`/category/${category}`}
                  key={category}
                  className="text-black text-sm"
                >
                  {category}
                </Link>
              ))}
            </ul>
            <button
              className="text-black text-sm mt-4 flex items-center gap-2"
              onClick={handleToggleCategories}
            >
              {showAll ? "Show Less" : "See All"}
              <RiArrowDownSLine size={20} />
            </button>
          </div>
          <hr />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Programs & Features</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-black text-sm">Gift Carts</li>
              <li className="text-black text-sm">Shope by Interest</li>
              <li className="text-black text-sm">Amazon Live</li>
              <li className="text-black text-sm">International Shopping</li>
            </ul>
          </div>
          <hr />
          {/* Other sections */}
          <div className="p-6 mb-5">
            <h3 className="text-lg font-semibold mb-3">Help & Settings</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-black text-sm">
                <TbWorld size={20} />
                <span>English</span>
              </li>
              <li className="flex items-center gap-2 text-black text-sm">
                <img src={egyptFlag} alt="Egypt flag" width={20} height={15} />
                <span>Egypt</span>
              </li>
              <li className="text-black text-sm">Help</li>
              {user ? (
                <li
                  className="text-black text-sm"
                  onClick={() => handleLogout()}
                >
                  Sign out
                </li>
              ) : (
                <li
                  className="text-black text-sm"
                  onClick={() => handleLogin()}
                >
                  Sign in
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import egyptFlag from "../../assets/egypt.svg";
import logo from "../../assets/logo.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Search from "./Search";
import ButtonHeader from "./ButtonHeader";
import CartBtn from "./CartBtn";
import { Link } from "react-router-dom";
import SignInBtn from "./SignInBtn";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const { fav } = useSelector((state) => state.fav);
  return (
    <div className="sticky top-0 z-50">
      {/* top header  */}
      <div className="px-3 bg-black h-[60px] flex items-center gap-1 md:gap-3">
        <div className="flex md:hidden">
          <Sidebar />
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[90px] lg:w-[120px] object-cover mt-2"
          />
        </Link>
        <div className="hidden lg:flex items-center headerItem h-[90%] text-xs">
          <HiOutlineLocationMarker size={20} className="text-white" />
          <div className="flex flex-col">
            <span className="text-gray-400 font-medium">
              Delivering to New Cairo...
            </span>
            <span className="text-white text-[13px] font-bold">
              Update location
            </span>
          </div>
        </div>
        <div className="hidden lg:block flex-1">
          <Search />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-1 h-[90%] headerItem font-semibold text-white">
          <img src={egyptFlag} alt="egypt flag" className="w-[20px]" />
          EN
          <RiArrowDropDownFill size={25} />
        </div>
        <div className="hidden lg:flex flex-col justify-end items-start headerItem text-white text-xs font-medium">
          <SignInBtn />
          <div className="flex items-center font-bold">
            <p className="text-[13px]">Accounts & Links</p>
            <RiArrowDropDownFill size={25} />
          </div>
        </div>
        <Link
          to="/fav"
          className="text-white hidden lg:flex flex-col justify-center h-[90%] headerItem font-semibold"
        >
          <span className="text-amazon_lightText font-medium text-xs flex items-center gap-2">
            Marked{" "}
            <span className="w-5 h-5 border border-amazon_lightText font-bold grid place-items-center text-amazon_orangeDark rounded-md">
              {fav.length}
            </span>
          </span>
          <span className="text-[13px] font-bold">& Favorite</span>
        </Link>

        {/* mobile */}
        <div className="flex items-center gap-1 ml-auto">
          <div className="lg:hidden flex items-center text-white text-sm">
            {!user && (
              <Link to="/signin" className="flex items-center">
                sign in
                <RiArrowDropRightLine size={22} className="text-primary" />
              </Link>
            )}
            <MdPersonOutline size={30} className="text-white" />
          </div>
          <Link to="/fav">
            <div className="lg:hidden relative">
              <span className="w-4 h-4 text-xs absolute bg-red-500 top-0 right-0 font-bold grid place-items-center text-white rounded-full">
                {fav.length}
              </span>
              <MdOutlineFavoriteBorder size={30} className="text-white" />
            </div>
          </Link>
          <CartBtn />
        </div>
      </div>

      <div className="px-3 bg-black h-auto lg:hidden block py-2">
        <Search />
      </div>

      {/* bottom header  */}

      <div className="px-3 bg-bgLight h-[40px] flex items-center hide-scrollbar">
        <ButtonHeader />
      </div>
    </div>
  );
};

export default Header;

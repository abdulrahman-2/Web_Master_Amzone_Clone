import React from "react";
import { Link } from "react-router-dom";

function AmazonNavbar() {
  return (
    <header className="bg-amazonClone text-white ">
      <div className=" flex flex-col items-center justify-evenly lg:flex-row lg:justify-between mx-auto p-4">
        {/* left*/}
        <div className="flex items-center ">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../../../public/images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="pl-4 text-center">
            <Link to={"/"} className="text-sm xl:text-sm  font-normal">
              Delivering to Surat 394210
            </Link>
            <Link
              to={"/"}
              className="text-sm xl:text-sm flex items-center font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 b"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.95l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Update location
            </Link>
          </div>
        </div>

        {/*  Middle */}
        <div className="w-[70%] lg:w-[30rem] xl:w-[60%] px-2 my-2">
          <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
            <select
              // onChange={(e) => setCategory(e.target.value)}
              className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
            >
              <option>Deals</option>
              <option>Amazon</option>
              <option>Fashion</option>
              <option>Computers</option>
              <option>Home</option>
              <option>Mobiles</option>
            </select>
            <input
              className="flex grow items-center h-[100%] rounded-l text-black"
              type="text"
              placeholder=" searchTerm"
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-amazonClone-yellow py-2 px-4 rounded-r-md focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <select className="p-1 bg-amazonClone w-[50px] border-transparent text-white  text-xs xl:text-sm ">
            <option>EN</option>
            <option>AR</option>
          </select>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <img
            src="../../../public/images/Vector.png"
            className="w-15"
            alt=""
          />
          <a href="#" className="hover:underline">
            Cart
          </a>
        </div>
      </div>

      <div className="bg-amazonClone-light_blue py-1">
        <div className="container  flex flex-wrap justify-start bg-amazonClone-light_blue  text-white space-x-3 font-bold text-xs xl:text-sm p-3 pl-6 ">
          <Link to={"/"}>All</Link>
          <Link to={"/"}>Amazon mini TV</Link>
          <Link to={"/"}>Sell</Link>
          <Link to={"/"}>Best Sellers</Link>
          <Link to={"/"}>Today's Deals</Link>
          <Link to={"/"}>Mobiles</Link>
          <Link to={"/"}>Customer Service</Link>
          <Link to={"/"}>Prime</Link>
          <Link to={"/"}>Electronics</Link>
          <Link to={"/"}>Fashion</Link>
          <Link to={"/"}>New Releases</Link>
          <Link to={"/"}>Home & Kitchen</Link>
          <Link to={"/"}>Amazon Pay</Link>
        </div>
      </div>
    </header>
  );
}

export default AmazonNavbar;

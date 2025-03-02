import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-amazonClone-light_blue text-white text-center ">
      {/* button */}
      <a
        href="#top"
        className="block bg-amazonClone-light_blue_2 text-center py-3"
      >
        Back to top
      </a>
      {/* top */}
      <div className="mx-auto text-left  py-8  ">
        <div className="container w-[80%] mx-auto grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)] gap-4 py-8">
          <div className="mb-4 ">
            <h4 className="mb-2 font-semibold text-lg">Get to Know Us</h4>
            <ul className="list-none p-0">
              <li className="mb-1">
                <Link
                  to="/about-amazon"
                  className="text-white font-light text-base"
                >
                  About Amazon
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/careers" className="text-white font-light text-base">
                  Careers
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/amazon-science"
                  className="text-white font-light text-base"
                >
                  Amazon Science
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 font-semibold text-lg">Shop with Us</h4>
            <ul className="list-none p-0">
              <li className="mb-1">
                <Link
                  to="/your-account"
                  className="text-white font-light text-base"
                >
                  Your Account
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/your-orders"
                  className="text-white font-light text-base"
                >
                  Your Orders
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/your-addresses"
                  className="text-white font-light text-base"
                >
                  Your Addresses
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/your-lists"
                  className="text-white font-light text-base"
                >
                  Your Lists
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 font-semibold text-lg">Make Money with Us</h4>
            <ul className="list-none p-0">
              <li className="mb-1">
                <Link
                  to="/protect-and-build-your-brand"
                  className="text-white font-light text-base"
                >
                  Protect and build your brand
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/advertise-your-products"
                  className="text-white font-light text-base"
                >
                  Advertise Your Products
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/sell-on-amazon"
                  className="text-white font-light text-base"
                >
                  Sell on Amazon
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/fulfillment-by-amazon"
                  className="text-white font-light text-base"
                >
                  Fulfillment by Amazon
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/supply-to-amazon"
                  className="text-white font-light text-base"
                >
                  Supply to Amazon
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 font-semibold text-lg">Let Us Help You</h4>
            <ul className="list-none p-0">
              <li className="mb-1">
                <Link to="/help" className="text-white font-light text-base">
                  Help
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/shipping-delivery"
                  className="text-white font-light text-base"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/returns-replacements"
                  className="text-white font-light text-base"
                >
                  Returns & Replacements
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/recalls-product-safety-alerts"
                  className="text-white font-light text-base"
                >
                  Recalls and Product Safety Alerts
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/amazon-app-download"
                  className="text-white font-light text-base"
                >
                  Amazon App Download
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* middle */}
        <div className="w-100 flex justify-center items-center p-4  border-t-2 border-[#B4B4B4]">
          <img
            src="../../../public/images/amazon.png"
            alt="Amazon Logo"
            className="w-100 h-8 mt-3 mr-2"
          />
          <div>
            <select className="bg-gray-700 text-white bg-transparent border rounded-sm border-[#B4B4B4] p-1 mx-3">
              <option>English</option>
            </select>
            <select className="bg-gray-700 text-white bg-transparent border rounded-sm border-[#B4B4B4] p-1">
              <option>Egypt</option>
            </select>
          </div>
        </div>
        {/* bottom */}
        <div className="container w-[80%] mx-auto grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)] gap-4 py-8">
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Amazon Advertising</h5>
            <p className="text-sm font-light">
              Find, attract, and engage customers
            </p>
          </div>
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Sell on Amazon</h5>
            <p className="text-sm font-light">Start Selling Online Today</p>
          </div>
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Amazon Web Services</h5>
            <p className="text-sm font-light">
              Scalable Cloud Computing Services
            </p>
          </div>
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Goodreads</h5>
            <p className="text-sm font-light">Book reviews & recommendations</p>
          </div>
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Audible</h5>
            <p className="text-sm font-light">Download Audio Books</p>
          </div>
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">IMDb</h5>
            <p className="text-sm font-light">Movies, TV & Celebrities</p>
          </div>
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Alexa</h5>
            <p className="text-sm font-light">
              Actionable Analytics for the Web
            </p>
          </div>
          <div className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Shopbop</h5>
            <p className="text-sm font-light">Designer Fashion Brands</p>
          </div>
        </div>
        {/* CopyRight */}
        <div className="text-xs font-medium text-center ">
          <Link to="/conditions" className="mr-6  ">
            Conditions of Use & Sale
          </Link>
          <Link to="/privacy" className="mr-6 ">
            Privacy Notice
          </Link>
          <Link to="/ads" className="mr-6 ">
            Interest-Based Ads
          </Link>
          <p className="my-2">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

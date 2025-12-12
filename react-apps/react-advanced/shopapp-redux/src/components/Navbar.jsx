import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    // 1. Outer container for the entire Navbar
    <div className="bg-slate-900 fixed top-0 left-0 w-full">
      {/* 2. Inner container for logo and navigation items */}
      <div className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        {/* 3. Logo/Home Link Section */}
        <NavLink to="/">
          {/* Adjusting logo size/style for better appearance */}
          <img src={logo} alt="codehlp-logo" className="h-12" />
        </NavLink>

        {/* 4. Navigation Links and Cart Icon Section */}
        <div className="flex items-center space-x-6 text-white">
          {/* 5. Home Link */}
          <NavLink to="/">
            <p className="text-lg font-medium hover:text-green-400 transition duration-300">
              Home
            </p>
          </NavLink>

          {/* 6. Cart Icon Link */}
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:text-green-400 transition duration-300" />
              {/* Optional: Add a badge for cart item count (requires state, not shown here) */}
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">
                {cart.length}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

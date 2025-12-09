import React from "react";
import { Link } from "react-router-dom";

// Header component displayed on all pages
const Header = () => {
  return (
    <header className="bg-blue-600 py-6 shadow-lg sticky top-0 z-50">
      {/* Logo/title linking back to home */}
      <Link to="/" className="block text-center hover:opacity-90 transition duration-200">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          CODEHELP BLOGS
        </h1>
      </Link>
    </header>
  );
};

export default Header;

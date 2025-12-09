import React from "react";
import { Link } from "react-router-dom";

// Header component displayed on all pages
const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        {/* Logo/title linking back to home */}
        <Link to="/" className="logo">
          <h1 className="logo-title">BLOG PLATFORM</h1>
          <p className="logo-sub">Powered by CodeHelp</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
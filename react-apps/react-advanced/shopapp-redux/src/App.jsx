import React from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

// App: top-level layout and route outlet
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900  pt-20">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content area */}
      <main className="app-container py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

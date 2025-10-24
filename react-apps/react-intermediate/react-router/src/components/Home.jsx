// src/components/Home.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate =useNavigate()
  function clickHandler(){
    navigate("/about")
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Home Page</h1>
      <p className="text-gray-600 mb-6 text-center">
        This is a simple React page styled with TailwindCSS.
      </p>
      <button onClick={clickHandler} className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
        Get Started
      </button>
      {/* <Outlet /> */}
    </div>
  );
}

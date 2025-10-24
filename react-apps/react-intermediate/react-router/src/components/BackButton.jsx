// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <button
      onClick={handleGoBack}
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all duration-200"
    >
      <span>←</span>
      <span>Back</span>
    </button>
  );
}

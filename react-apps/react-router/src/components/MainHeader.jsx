// src/components/MainHeader.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainHeader() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <App />
  <Toaster
  position="top-right"
  toastOptions={{
    duration: 4000, // default duration for all toasts
    style: {
      background: "#111827", // dark background
      color: "#fff",
      padding: "12px 16px",
      borderRadius: "8px",
      fontWeight: "600",
      border: "3px solid transparent", // default border
    },
    success: {
      icon: null, // remove icon
      style: {
        background: "#111827",
        color: "#fff",
        padding: "12px 16px",
        borderRadius: "8px",
        fontWeight: "600",
        border: "3px solid #22c55e", // green outline
      },
    },
    error: {
      icon: null, // remove icon
      style: {
        background: "#111827",
        color: "#fff",
        padding: "12px 16px",
        borderRadius: "8px",
        fontWeight: "600",
        border: "3px solid #ef4444", // red outline
      },
    },
  }}
/>


</BrowserRouter>

);

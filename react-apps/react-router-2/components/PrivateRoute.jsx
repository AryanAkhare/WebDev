import React from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast for notifications

// This component checks the isLoggedIn status before rendering the children (e.g., Dashboard)
export default function PrivateRoute({ isLoggedIn, children }) {
  // If the user is logged in, render the intended component (children)
  if (isLoggedIn) {
    return children;
  } 
  // If the user is NOT logged in, redirect them to the /login page
  else {
    // Notify the user why they are being redirected
    toast.error("Please log in to view the Dashboard."); 
    return <Navigate to="/login" replace />;
  }
}

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

// Display blogs filtered by a specific tag
const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Extract tag from URL path and replace hyphens with spaces
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-6">
        <div className="mb-6">
          {/* Back button for navigation */}
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Blogs Tagged <span className="text-blue-600">#{tag}</span></h2>
        </div>
        {/* Display filtered blogs and pagination */}
        <Blogs />
        <Pagination />
      </main>
    </div>
  );
};

export default TagPage;

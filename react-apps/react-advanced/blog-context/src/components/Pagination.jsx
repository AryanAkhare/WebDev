import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Navigation component for paginated blog posts
const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  // Hide pagination if total pages not available
  if (!totalPages) return null;

  return (
    <nav className="flex justify-center mt-8">
      <div className="flex flex-col items-center gap-4">
        {/* Previous/Next buttons */}
        <div className="flex gap-4">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
            >
              ← Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
            >
              Next →
            </button>
          )}
        </div>

        {/* Page info */}
        <p className="text-gray-600 font-medium">
          Page <span className="text-blue-600">{page}</span> of{" "}
          <span className="text-blue-600">{totalPages}</span>
        </p>
      </div>
    </nav>
  );
};

export default Pagination;

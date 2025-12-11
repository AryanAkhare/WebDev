 import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Navigation component for paginated blog posts
const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  // Hide pagination if total pages not available
  if (!totalPages || totalPages <= 1) return null;

  return (
    <nav className="pagination-bar">
      <div className="container pagination-inner">
        {/* Previous/Next buttons */}
        <div style={{display:'flex',gap:12}}>
          {page > 1 && (
            <button onClick={() => handlePageChange(page - 1)} className="btn btn-outline">
              <span aria-hidden="true">←</span>
              <span style={{marginLeft:8}}>Previous</span>
            </button>
          )}

          {page < totalPages && (
            <button onClick={() => handlePageChange(page + 1)} className="btn btn-outline">
              <span style={{marginRight:8}}>Next</span>
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>

        {/* Page info */}
        <p className="page-info">
          Page <span className="page-num">{page}</span> of <span className="page-num">{totalPages}</span>
        </p>
      </div>
    </nav>
  );
};

export default Pagination;
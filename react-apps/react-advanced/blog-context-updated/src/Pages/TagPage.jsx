import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

// Display blogs filtered by a specific tag
const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Extract tag from URL path and replace hyphens with spaces (LOGIC UNCHANGED)
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

  return (
    <div className="page-root">
      <Header />
      <main className="main container">
        <div className="card" style={{marginBottom:24,padding:18}}>
          {/* Back button for navigation */}
          <button onClick={() => navigate(-1)} className="btn btn-outline" style={{marginBottom:12}}>
            <span aria-hidden="true">←</span> <span style={{marginLeft:8}}>Back</span>
          </button>
          <h2 className="post-title">Filtering Blogs by Tag: <span style={{color:'var(--accent)'}}>#{tag.toUpperCase()}</span></h2>
        </div>
        {/* Display filtered blogs and pagination */}
        <Blogs />
        <div style={{height:80}} /> {/* Space for fixed bottom pagination */}
      </main>
      <Pagination />
    </div>
  );
};

export default TagPage;
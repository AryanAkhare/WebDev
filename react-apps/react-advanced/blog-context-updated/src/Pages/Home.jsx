import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

// Home page displaying all blog posts with pagination
const Home = () => {
  return (
    <div className="page-root">
      <Header />
      <main className="main container">
        {/* Display blog posts list */}
        <Blogs />
        {/* Extra space to prevent content being hidden by fixed pagination */}
        <div style={{height:80}} />
      </main>
      {/* Navigation for pagination (fixed at bottom) */}
      <Pagination />
    </div>
  );
};

export default Home;
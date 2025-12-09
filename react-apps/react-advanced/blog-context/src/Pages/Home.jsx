import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

// Home page displaying all blog posts with pagination
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-6">
        {/* Display blog posts list */}
        <Blogs />
        {/* Navigation for pagination */}
        <Pagination />
      </main>
    </div>
  );
};

export default Home;
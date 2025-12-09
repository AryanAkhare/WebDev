import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import BlogDetails from "./BlogDetails"; // Assuming it's in the same directory or needs correct path

// Display list of blog posts with loading state and error handling
const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <section className="container">
      {loading ? (
        // Show spinner while loading
        <div className="loading" style={{padding:'5rem 0',minHeight:160,display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        // Show message when no posts available
        <div className="empty-state">
          <p className="font-semibold mb-2">😞 No Posts Available</p>
          <p className="muted">Try navigating to the Home page or check your API connection.</p>
        </div>
      ) : (
        // Display all blog posts
        <div className="posts-list">
          {posts.map((post) => (
            // BlogDetails handles the professional look of each post card
            <BlogDetails key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Blogs;
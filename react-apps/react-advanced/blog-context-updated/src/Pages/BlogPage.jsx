import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";
// Removed unnecessary AppContext import and logic
// import { AppContext } from "../context/AppContext"; 
// import { baseUrl } from "../baseUrl"; // Also removed as newBaseUrl is defined inside

// Display a single blog post with related blogs
const BlogPage = () => {
  // Local state for this page's blog data
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  // Using the same base URL as in the original logic
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  // Extract blog ID from URL
  const blogId = location.pathname.split("/").at(-1);

  // Fetch blog details and related blogs from API (LOGIC UNCHANGED)
  async function fetchRelatedBlogs() {
    setLocalLoading(true);
    // ... (rest of the API fetching logic is kept exactly as you wrote it) ...
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("Fetching blog with URL:", url);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`API returned ${res.status}`);
      }
      const data = await res.json();
      
      console.log("Blog API Response:", data);

      let resolvedBlog = null;
      let resolvedRelated = [];

      if (data) {
        resolvedBlog = data.blog || data.post || data.data || null;

        if (!resolvedBlog && Array.isArray(data.posts)) {
          resolvedBlog = data.posts.find((p) => String(p.id) === String(blogId)) || null;
        }

        if (Array.isArray(data.relatedBlogs)) resolvedRelated = data.relatedBlogs;
        else if (Array.isArray(data.related)) resolvedRelated = data.related;
        else if (Array.isArray(data.posts)) {
          const base = resolvedBlog || data.posts.find((p) => String(p.id) === String(blogId));
          if (base && base.category) {
            resolvedRelated = data.posts.filter((p) => p.category === base.category && String(p.id) !== String(base.id));
          }
        }
      }

      if (resolvedBlog) {
        console.log("✅ Resolved blog:", resolvedBlog.title || resolvedBlog.id || '(no title)');
        setBlog(resolvedBlog);
        console.log("✅ Resolved related count:", resolvedRelated.length);
        setRelatedBlogs(resolvedRelated);
      } else {
        console.warn("❌ Could not resolve blog from API response. Returning empty.", data);
        setBlog(null);
        setRelatedBlogs([]);
      }
    } catch (e) {
      console.error("Error fetching blog:", e);
      setBlog(null);
      setRelatedBlogs([]);
    } finally {
      setLocalLoading(false);
    }
  }

  // Fetch blog when component mounts or blogId changes (LOGIC UNCHANGED)
  useEffect(() => {
    if (blogId) {
      console.log("BlogPage mounted with blogId:", blogId);
      fetchRelatedBlogs();
    }
  }, [blogId]);

  return (
    <div className="page-root">
      <Header />
      <main className="main container">
        {/* Back button */}
        <button onClick={() => navigate(-1)} className="btn btn-outline" style={{marginBottom:24}}>
          <span aria-hidden="true">←</span> <span style={{marginLeft:8}}>Back</span>
        </button>

        {/* Display loading, blog content, or error message */}
        {localLoading ? (
          <div style={{padding:'5rem 0',display:'flex',justifyContent:'center'}}><Spinner /></div>
        ) : blog ? (
          <div>
            {/* Main blog post with full content */}
            <BlogDetails post={blog} showFullContent={true} />

            {/* Related blogs section */}
            {relatedBlogs && relatedBlogs.length > 0 ? (
              <section style={{marginTop:48,paddingTop:24,borderTop:'1px solid var(--border)'}}>
                <h2 className="post-title" style={{marginBottom:18}}>Related Blogs</h2>
                <div className="posts-list">
                  {relatedBlogs.map((post) => (
                    <BlogDetails key={post.id} post={post} showFullContent={false} />
                  ))}
                </div>
              </section>
            ) : (
              <div className="empty-state" style={{marginTop:24}}>
                <p className="muted">No related blogs found for this category.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="empty-state" style={{marginTop:24}}>
            <p style={{fontWeight:700,marginBottom:8}}>❌ Blog Post Not Found</p>
            <p className="muted" style={{marginBottom:12}}>The blog ID <strong>{blogId}</strong> does not correspond to an existing post.</p>
            <button onClick={() => navigate(-1)} className="btn btn-primary">Go Back</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
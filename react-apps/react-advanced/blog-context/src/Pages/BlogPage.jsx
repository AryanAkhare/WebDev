import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";
import { baseUrl } from "../baseUrl";

// Display a single blog post with related blogs
const BlogPage = () => {
  // Local state for this page's blog data
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [localLoading, setLocalLoading] = useState(true); // Use local loading state
  const location = useLocation();
  const navigate = useNavigate();
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  // Extract blog ID from URL
  const blogId = location.pathname.split("/").at(-1);

  // Fetch blog details and related blogs from API
  async function fetchRelatedBlogs() {
    setLocalLoading(true);




    
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;







    console.log("Fetching blog with URL:", url);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`API returned ${res.status}`);
      }
      const data = await res.json();
      
      console.log("Blog API Response:", data);

      // Defensive parsing: the API may return different shapes.
      // Try common possibilities and fall back to derived related posts.
      // 1) { blog: {...}, relatedBlogs: [...] }
      // 2) { post: {...}, related: [...] }
      // 3) list endpoint returned: { posts: [...] } -> pick the matching id
      let resolvedBlog = null;
      let resolvedRelated = [];

      if (data) {
        // a) explicit keys
        resolvedBlog = data.blog || data.post || data.data || null;

        // b) sometimes the single post is returned inside 'posts' array
        if (!resolvedBlog && Array.isArray(data.posts)) {
          resolvedBlog = data.posts.find((p) => String(p.id) === String(blogId)) || null;
        }

        // c) related keys
        if (Array.isArray(data.relatedBlogs)) resolvedRelated = data.relatedBlogs;
        else if (Array.isArray(data.related)) resolvedRelated = data.related;
        else if (Array.isArray(data.posts)) {
          // derive related by category (exclude the current post)
          const base = resolvedBlog || data.posts.find((p) => String(p.id) === String(blogId));
          if (base && base.category) {
            resolvedRelated = data.posts.filter((p) => p.category === base.category && String(p.id) !== String(base.id));
          }
        }
      }

      // Finalize state
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

  // Fetch blog when component mounts or blogId changes
  useEffect(() => {
    if (blogId) {
      console.log("BlogPage mounted with blogId:", blogId);
      fetchRelatedBlogs();
    }
  }, [blogId]); // Only refetch when blogId changes

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-6">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium mb-6"
        >
          ← Back
        </button>

        {/* Display loading, blog content, or error message */}
        {localLoading ? (
          <Spinner />
        ) : blog ? (
          <div>
            {/* Main blog post with full content */}
            <BlogDetails post={blog} showFullContent={true} />
            
            {/* Related blogs section */}
            {relatedBlogs && relatedBlogs.length > 0 ? (
              <section className="mt-12 pt-8 border-t border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Blogs ({relatedBlogs.length})</h2>
                <div className="space-y-8">
                  {relatedBlogs.map((post) => (
                    <BlogDetails key={post.id} post={post} showFullContent={false} />
                  ))}
                </div>
              </section>
            ) : (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-600 text-sm">No related blogs found</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg mt-10">
            <p className="mb-4">❌ No Blog Found</p>
            <p className="text-sm text-gray-500">Blog ID: {blogId}</p>
            <button 
              onClick={() => navigate(-1)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Go Back
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPage;

import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';

// Main App component managing routing and context-based data fetching
function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Fetch blog posts based on current route and pagination
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    // Only fetch when NOT on a single blog page (BlogPage handles its own fetching)
    if (!location.pathname.includes("/blog/")) {
      // Determine which filter to apply based on current path
      if (location.pathname.includes("tags")) {
        // Extract tag from URL path and replace hyphens with spaces
        const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
        fetchBlogPosts(Number(page), tag);
      } else if (location.pathname.includes("categories")) {
        // Extract category from URL path and replace hyphens with spaces
        const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
        fetchBlogPosts(Number(page), null, category);
      } else {
        // Fetch all blog posts for home page
        fetchBlogPosts(Number(page));
      }
    }
    // Only run when pathname or search params change, not on fetchBlogPosts function changes
  // Note: `fetchBlogPosts` is not included because it's recreated on context updates
  // and would cause the effect to re-run repeatedly. We only want to refetch when
  // the route or search params change.
  }, [location.pathname, location.search]);

  return (
    // Define all available routes
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;

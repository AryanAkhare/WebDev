import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  // State management for blog posts, pagination, and filters
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch blog posts from API with optional tag and category filters
  // Use the useContext hook in components to access this context
  async function fetchBlogPosts(page = 1, tag = null, category = null) {
    setLoading(true);
    // remember current filter so pagination keeps it
    setSelectedTag(tag);
    setSelectedCategory(category);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${encodeURIComponent(tag)}`;
    }
    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }

    try {
      const result = await fetch(url);
      const data = await result.json();

      setPage(data.page ?? page);
      setPosts(data.posts ?? []);
      setTotalPages(data.totalPages ?? null);
    } catch (e) {
      console.log("Error in fetching", e);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    } finally {
      setLoading(false);
    }
  }

  // Page change handler
  function handlePageChange(page) {
    setPage(page);
    // call fetch with current filters so pagination preserves tag/category
    fetchBlogPosts(page, selectedTag, selectedCategory);
  }

  // Context value object with all state and functions
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    selectedTag,
    selectedCategory,
    fetchBlogPosts,
    handlePageChange,
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}

export { AppContextProvider };



import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
    //tHIS CAN BE USED USING HOOK , useContext
  // Fetch API Data
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log("Error in fetching");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }

  // Page change handler
  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
    fetchBlogPosts
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}

export { AppContextProvider };



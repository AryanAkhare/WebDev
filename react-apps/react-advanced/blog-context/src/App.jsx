import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'

function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []); // run only once on mount

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-6">
        <Blogs />
        <Pagination />
      </main>
    </div>
  );
}

export default App;

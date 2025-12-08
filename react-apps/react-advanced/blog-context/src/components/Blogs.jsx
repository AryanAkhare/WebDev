import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-full max-w-2xl mx-auto py-6 px-4">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-10">
          <p>Posts not available</p>
        </div>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg p-5 mb-6 shadow-sm hover:shadow-md transition-all"
          >
            <p className="text-2xl font-bold mb-1">{post.title}</p>

            <p className="text-sm text-gray-500 mb-1">
              By <span className="font-semibold">{post.author}</span> on{" "}
              <span className="text-indigo-600">{post.category}</span>
            </p>

            <p className="text-xs text-gray-400 mb-3">Posted on {post.date}</p>

            <p className="text-base text-gray-700 mb-3">{post.content}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;

import React from 'react';
import { NavLink } from 'react-router-dom';

// Display a single blog post with title, author, date, content, and tags
// showFullContent: true to show full content (on blog page), false to truncate (on home page)
const BlogDetails = ({ post, showFullContent = false }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition duration-200">
      {/* Blog title as a link */}
      <NavLink to={`/blog/${post.id}`}>
        <h3 className="text-2xl font-bold text-blue-600 hover:text-blue-800 mb-3 transition duration-200">
          {post.title}
        </h3>
      </NavLink>

      {/* Author and category info */}
      <div className="text-sm text-gray-600 mb-3 flex flex-wrap gap-2">
        <span>By <span className="font-semibold text-gray-800">{post.author}</span> in</span>
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="text-blue-600 hover:text-blue-800 font-medium">{post.category}</span>
        </NavLink>
      </div>

      {/* Publication date */}
      <p className="text-xs text-gray-500 mb-4">Posted on {post.date}</p>

      {/* Blog content - show full or truncated based on showFullContent prop */}
      <p className={`text-gray-700 leading-relaxed mb-4 ${showFullContent ? '' : 'line-clamp-3'}`}>
        {post.content}
      </p>

      {/* Tags section */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
        {post.tags && post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition duration-200">
              #{tag}
            </span>
          </NavLink>
        ))}
      </div>
    </article>
  );
};

export default BlogDetails;

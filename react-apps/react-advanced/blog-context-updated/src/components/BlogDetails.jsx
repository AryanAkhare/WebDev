import React from 'react';
import { NavLink } from 'react-router-dom';

// Display a single blog post with title, author, date, content, and tags
// showFullContent: true to show full content (on blog page), false to truncate (on home page)
const BlogDetails = ({ post, showFullContent = false }) => {
  return (
    <article className="card post-card">
      {/* 🚀 Blog Title as a Link */}
      <NavLink to={`/blog/${post.id}`} className="post-link">
        <h3 className="post-title">{post.title}</h3>
      </NavLink>

      {/* 👤 Author and Category Info */}
      <div className="post-meta">
        <span>
          By <span style={{fontWeight:700,color:'inherit'}}>{post.author}</span> in
        </span>

        {/* Category Link */}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} style={{color:'var(--accent)',fontWeight:600}}>
          {post.category}
        </NavLink>

        <span style={{color:'var(--muted)'}}>|</span>

        {/* Publication Date */}
        <p style={{fontSize:'0.85rem',color:'var(--muted)',margin:0}}>
          Posted on <time dateTime={post.date}>{post.date}</time>
        </p>
      </div>

      {/* 📄 Blog Content - show full or truncated based on showFullContent prop */}
      <p className={`post-content ${showFullContent ? '' : 'clamp'}`}>
        {post.content}
      </p>

      {/* 🏷️ Tags section */}
      <div className="tags">
        {post.tags && post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} className="inline-block">
            <span className="tag">#{tag.toUpperCase()}</span>
          </NavLink>
        ))}
      </div>
    </article>
  );
};

export default BlogDetails;
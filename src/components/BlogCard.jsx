import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ img, title, author, createdAt, id }) => {
  return (
    <div className="blog-card">
      <img src={img} alt="img" style={{ width: '450px' }} />
      <Link to={`/post-details/${id}`}>
        <h2>{title}</h2>
      </Link>
      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h3>Created by </h3>
        <h2>
          {author.username.charAt(0).toUpperCase() +
            author.username.slice(1).toLowerCase()}
        </h2>
      </span>
      <h3>{createdAt.split('T')[0]}</h3>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

export const BlogCard = ({ img, title, createdAt, id }) => {
  const date = new Date(createdAt || new Date());

  return (
    <div className="blog-card">
      <img src={img} alt="img" />
      <Link to={`/post-details/${id}`}>
        <h2>{title}</h2>
      </Link>

      <h3>{format(date, "MMM dd, yyyy")}</h3>
    </div>
  );
};

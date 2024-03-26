import React from "react";
import { Link } from "react-router-dom";
import { Blog } from "./Blog1";

interface Props {
  blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <React.Fragment>
      <div className="single-blog-item">
        <div className="blog-bg">
          <img src={blog.img} alt="" />
          <span className="blog-date">{blog.date}</span>
        </div>
        <div className="blog-content">
          <p className="blog-meta">
            {blog.author} |{" "}
            {blog.num_comments < 10
              ? "0" + blog.num_comments
              : blog.num_comments}{" "}
            Comments
          </p>
          <h5>
            <Link to={`/blog/${blog.id}`}>{blog.heading}</Link>
          </h5>
          <p>{blog.title}</p>
          <Link to={`/blog/${blog.id}`} className="blog-details-link">
            <i className="las la-arrow-right"></i>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;

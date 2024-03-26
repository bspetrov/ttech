import React from "react";
import BlogCard from "./BlogCard";
import useGetData from "../../hooks/useGetData";

interface Props {
  type: boolean;
}

export interface Blog {
  id: string;
  img: string;
  author: string;
  num_comments: number;
  date: string;
  heading: string;
  title: string;
}

interface RequestObject {
  blogs: Blog[];
}

const Blog1: React.FC<Props> = ({ type }) => {
  const request: RequestObject = useGetData({}, "/data/blogs.json");
  const blogs = request.blogs;

  function index(i: number): number {
    let k = i + 1;
    if (type && k > 3) {
      if (k % 3 !== 0) {
        k = k % 3;
      } else {
        k = 3;
      }
    }
    return k;
  }
  return (
    <div
      className={`blog-area section-padding pb-60 ${type ? "blog-page" : ""}`}
    >
      <div className="container">
        {!type ? (
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title">
                <h6>Blog</h6>
                <h2>
                  What <b>happen</b> inside our <b>company</b>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 text-right"></div>
          </div>
        ) : null}
        <div className="row">
          {blogs?.length > 0 &&
            (type ? blogs : blogs.slice(0, 3))?.map((blog, i) => (
              <div
                key={blog.id}
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
                data-wow-delay={`${index(i) * 200}ms`}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          {type ? (
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item" aria-current="page">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="las la-angle-right"></i>
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Blog1;

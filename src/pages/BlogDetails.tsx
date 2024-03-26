import React from "react";
import { HeaderArea, BlogArea, Breadcrumb } from "../components";

const BlogDetails: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <BlogArea />
    </React.Fragment>
  );
};

export default BlogDetails;

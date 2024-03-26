import React from "react";
import { HeaderArea, Blog1, Breadcrumb } from "../components";

const Blog: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <Blog1 type={true} />
    </React.Fragment>
  );
};

export default Blog;

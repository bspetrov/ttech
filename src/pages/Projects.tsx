import React from "react";
import { HeaderArea, Project1, Breadcrumb } from "../components";

const Projects: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <Project1 type={true} />
    </React.Fragment>
  );
};

export default Projects;

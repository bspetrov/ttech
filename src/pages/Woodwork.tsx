import React from "react";
import { HeaderArea, Project1, Breadcrumb, MainProject } from "../components";

const Woodwork: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <Project1 type={true} />
    </React.Fragment>
  );
};

export default Woodwork;

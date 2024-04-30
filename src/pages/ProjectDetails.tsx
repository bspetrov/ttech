import React from "react";
import { HeaderArea, Details, Breadcrumb } from "../components";
import { useParams } from "react-router-dom";

const ProjectDetails: React.FC = () => {
  const routePath = location.pathname.split("/");
  const { slug } = useParams();

  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <Details />
    </React.Fragment>
  );
};

export default ProjectDetails;

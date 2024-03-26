import React from "react";
import { Experience, HeaderArea, Team1, Breadcrumb } from "../components";

const Team: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <Experience />
      <Team1 type={true} />
    </React.Fragment>
  );
};

export default Team;

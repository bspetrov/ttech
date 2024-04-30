import React from "react";
import {
  HeaderArea,
  ProjectCounter,
  Testimonial1,
  Service3,
  Breadcrumb,
} from "../components";

const Services: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <Service3 />
      {/* <ProjectCounter type={true} /> */}
      {/* <Testimonial1 /> */}
    </React.Fragment>
  );
};

export default Services;

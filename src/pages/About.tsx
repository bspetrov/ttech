import React from "react";
import {
  Service1,
  Team1,
  ChooseUs,
  HeaderArea,
  Breadcrumb,
  Clients,
  ContactSection,
  About1
} from "../components";

const About: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <About1 />
      <ContactSection />
      <Service1 />
      <ChooseUs />
      <Clients />
      {/* <Team1 type={false} /> */}
    </React.Fragment>
  );
};

export default About;

import React from "react";
import {
  HeaderArea,
  ContactSection,
  ContactInfo,
  Breadcrumb,
} from "../components";

const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <ContactSection />
      <ContactInfo />
    </React.Fragment>
  );
};

export default Contact;

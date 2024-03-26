import React from "react";
import { HeaderArea, PricePlan, Breadcrumb } from "../components";

const Pricing: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <PricePlan />
    </React.Fragment>
  );
};

export default Pricing;

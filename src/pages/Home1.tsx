import React from "react";
import {
  HeaderTop,
  HeaderArea,
  HeroArea,
  Promo,
  Service1,
  Project1,
} from "../components";

const Home1: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <HeaderArea />
      <HeroArea type={true} />
      <Promo />
      <Service1 />
      <Project1 type={false} />
    </React.Fragment>
  );
};

export default Home1;

import React from "react";
import {
  HeaderArea,
  HeroArea,
  About2,
  Service2,
  ChooseUs,
  ProjectCounter,
  Experience,
  Team1,
  Testimonial2,
  Blog1,
} from "../components";

const Home2: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <HeroArea type={false} />
      <About2 />
      <Service2 />
      <ChooseUs />
      <ProjectCounter type={false} />
      <Experience />
      <Team1 type={false} />
      <Testimonial2 />
      <Blog1 type={false} />
    </React.Fragment>
  );
};

export default Home2;

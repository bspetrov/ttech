import React from "react";
import { Outlet } from "react-router-dom";
//utils
import ScrollToTop from "../utils/ScrollToTop";
import useScroll from "../hooks/useScroll";
import {
  BackToTop,
  Footer,
  FooterBottom,
  Preloader,
} from "../components";

const Main: React.FC = () => {
  const scrolled = useScroll();
  return (
    <ScrollToTop>
      <Preloader />
      <Outlet context={[scrolled]} />
      <Footer />
      <FooterBottom />
      <BackToTop />
    </ScrollToTop>
  );
};

export default Main;

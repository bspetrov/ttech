import React from "react";
import useScrollingProgress from "../../hooks/useScrollingProgress";
import CircularProgress from "./circularProgress";
import "./backToTop.css";

const BackToTop: React.FC = () => {
  const progress = useScrollingProgress();
  return (
    <a href="#" className={`back-top ${progress ? "active-progress" : ""}`}>
      <CircularProgress progress={progress} cW={90} />
    </a>
  );
};

export default BackToTop;

import React, { useEffect } from "react";

const Preloader: React.FC = () => {
  useEffect(() => {
    function handlePreloader() {
      const preloader: HTMLDivElement | null =
        document.querySelector("#loader");
      if (preloader) {
        setTimeout(function () {
          preloader.style.display = "none";
        }, 500);
      }
    }
    handlePreloader();
  }, []);

  return <div id="loader"></div>;
};

export default Preloader;

import { useEffect, useState } from "react";

const useScrollingProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const onScroll = () => {
    const winScroll: number =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = Math.round((winScroll / height) * 100);
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return scrollProgress;
};

export default useScrollingProgress;

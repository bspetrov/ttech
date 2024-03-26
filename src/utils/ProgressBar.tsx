import React, { useEffect, useState } from "react";
import "./progress.css";

interface props {
  trackBgColor?: string;
  trackColor?: string;
  textBgColor?: string;
  completed?: number;
  height?: number;
  start?: number;
}
const ProgressBar: React.FC<props> = ({
  height = 10,
  completed = 50,
  trackBgColor = "#eeeeee",
  textBgColor = "transparent",
  trackColor = "#f35c27",
  start = 30,
}) => {
  const [progress, setProgress] = useState(start);

  useEffect(() => {
    let timeout = 0;
    if (progress < completed) {
      timeout = setInterval(() => {
        setProgress((p) => p + 1);
      }, 10);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [completed, progress]);

  return (
    <div
      className="progress__container"
      style={{ height: height, backgroundColor: trackBgColor }}
    >
      <div
        className="progress__track"
        style={{ width: `${progress}%`, backgroundColor: trackColor }}
      >
        <span
          className="progress__textbar"
          style={{ backgroundColor: textBgColor }}
        >
          <span
            className="progress__label"
            style={{ backgroundColor: textBgColor }}
          ></span>
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

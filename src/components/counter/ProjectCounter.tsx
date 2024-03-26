import React from "react";
import CountUp from "react-countup";
import useGetData from "../../hooks/useGetData";

interface Props {
  type: boolean;
}

interface CountItem {
  id: string;
  job: string;
  done: number;
}
interface RequestObject {
  counter: CountItem[];
}
const ProjectCounter: React.FC<Props> = ({ type }: { type: boolean }) => {
  const request: RequestObject = useGetData({}, "/data/counter.json");
  const counter = request.counter;

  return (
    <div className={`counter-area ${type ? "dark-bg" : ""}`}>
      <div className="overlay-2"></div>
      <div className="container">
        <div className="row">
          {counter?.length > 0 &&
            counter?.map((item, i) => (
              <div
                key={item.id}
                className="col-lg-3 col-md-3 col-12 wow fadeInLeft"
                data-wow-delay={`${(i + 1) * 200}ms`}
              >
                <div className={`single-counter-box ${!type ? "two" : ""}`}>
                  <p className="counter-number">
                    <CountUp
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                      start={0}
                      end={item.done}
                      duration={1}
                      delay={4}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </p>
                  <h6 className={type ? "text-white" : ""}>{item.job}</h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCounter;

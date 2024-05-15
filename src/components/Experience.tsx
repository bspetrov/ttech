import React from "react";
import ProgressBar from "../utils/ProgressBar";

const Experience: React.FC = () => {
  return (
    <React.Fragment>
      <div id="about-3" className="about-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInDown"
              data-wow-delay=".2s"
            >
              <div className="info-content-area">
                <div
                  className="section-title wow fadeInDown"
                  data-wow-delay=".2s"
                >
                  <h6>Let's to Know Us</h6>
                  <h2>
                    We provides the best <b>service</b> for Industrial
                  </h2>
                </div>
                <p>
                  We are the leaders in the construction industries and
                  factories. We’re world wide reknown for our dignity. We
                  provide high quality service all time.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="choose-certify mt-40">
                    <i className="la la-clipboard-check"></i>
                    <h5>Certified Company</h5>
                    <p>
                      Behold Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="choose-certify mt-40">
                    <i className="la la-medal"></i>
                    <h5>Experience Employee</h5>
                    <p>
                      Behold Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-11">
                  <div className="progress-bar-area">
                    <div className="single-bar-item wow fadeInLeft">
                      <h4>Industrial</h4>
                      <ProgressBar completed={90} />
                    </div>

                    <div className="single-bar-item wow fadeInLeft">
                      <h4>Construction</h4>
                      <ProgressBar completed={70} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="about-bg text-end">
                <img src="/ttech/assets/img/about/about-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;

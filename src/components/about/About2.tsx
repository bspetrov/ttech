import React from "react";
import { Link } from "react-router-dom";

const About2: React.FC = () => {
  return (
    <React.Fragment>
      <div className="about-area about-two section-padding pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="info-img">
                <img src="/assets/img/about/about-1.png" alt="" />
                <div className="founded-year">
                  <i className="flaticon-factory">Founded in 1995</i>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="about-content-area">
                <div className="section-title">
                  <h6>About Us</h6>
                  <h2>
                    We're leading <b>Industrial Solution</b> in Worldwide
                  </h2>
                </div>

                <p>
                  We are build construction site lorem ipsum dolor sit amet,
                  consectetur elit. Ea enim et, similique,minus soluta ducimus.
                  The Most Eminent factory and Industrial Consultant service
                  provider. Branches in USA and overseas.
                </p>
                <br />

                <p>
                  industrify is famous construction factory to build a company
                  that can compete with large construction firms while operating
                  with the flexibility and customer-focus of a small, family-run
                  business.
                </p>

                <ul className="about-key mt-30">
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Best Industrial</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Quality Construction</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Expert Contractor</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Affordable Cost Rate</p>
                  </li>
                </ul>
                <div className="about-contact">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="call-us d-flex mt-30">
                          <div className="icon">
                            <i className="las la-phone"></i>
                          </div>
                          <div className="mobile-number">
                            <h5>Call Us Anytime</h5>
                            <p>92 666 888 0000</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Link to="/about" className="main-btn">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About2;

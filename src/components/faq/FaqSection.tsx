import React from "react";
import Accordion from "./Accordion";

const FaqSection: React.FC = () => {
  return (
    <React.Fragment>
      <div id="faq-page" className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-12 wow fadeInUp animated"
              data-wow-delay="200ms"
            >
              <div className="section-title">
                <p>Helpful Faq</p>
                <h2>We Always Answer Your Doubts</h2>
              </div>
              <Accordion />
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
              <div className="faq-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaqSection;

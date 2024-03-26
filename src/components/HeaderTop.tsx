import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <i className="las la-envelope"></i> ptenev@tenevtech.com |
                <i className="las la-map-marker"></i>1225, ul. "Nesho Bonchev" 13, 1225
                Sofia
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <div className="site-info">
                Безкомпромисно качество!
                <div className="social-area">
                  <a href="">
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="lab la-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderTop;

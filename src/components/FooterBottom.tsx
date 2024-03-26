import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <React.Fragment>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="copyright-line">
                © 2024 TenevTech. Всички права запазени.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="privacy">Privacy Policy | Terms &amp; Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterBottom;

import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="/" className="logo">
                <img src="/assets/img/logo-white.png" alt="industrify-logo" />
              </a>
              <p>
                Professionals with passion! <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Office</h5>
              <p>
              1225, ul. "Nesho Bonchev" 13, 1225 Sofia
              </p>
              <div className="company-email">
                <a href="#">ptenev@tenevtech.com</a>
              </div>
              <div className="phone-number">
                <p>+18-4675826</p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/about">Начало</Link>
                  <Link to="/services">Услуги</Link>
                  <Link to="/projects">Металообработка</Link>
                  <Link to="/pricing">Дървообработка</Link>
                  <Link to="/about">За нас</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Социални мрежи</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a href="#">
                      <i className="lab la-facebook-f"></i>Facebook
                    </a>
                    <a href="#">
                      <i className="lab la-instagram"></i>Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

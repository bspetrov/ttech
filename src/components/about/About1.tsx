import React from "react";

const About1: React.FC = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
            data-wow-delay=".6s"
          >
            <div className="about-img">
              <img src="/ttech/assets/img/about/about.png" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <div className="info-content-area">
              <div className="section-title">
                <h6>TENEV TECH</h6>
                <h2>Нашата цел е да предоставим качество</h2>
              </div>
              <p>
                Независимо от проекта,независимо дали е сложен машинен елемент или просто част от бита.
              </p>
              <br />
              <p>
                Бъдете уверени, че всяка детайлна част от вашия проект ще бъде обработена с внимание към най-малките подробности и безкомпромисно качество!
                <br />
              </p>
              <br />
              <p>
                Можете да се свържете с нас попълвайки формата с възможност за пиркачен файл, който да бъде разгледан от нашият екип!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;

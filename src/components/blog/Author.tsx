import React from "react";

const Author: React.FC = () => {
  return (
    <div className="author-profile">
      <img src="/assets/img/client-img.jpg" alt="" />
      <div className="author-info">
        <h6>Harvert Milan</h6>
        <p>
          While publishing our article in a journal, to claim it as our article,
          where should be our name in the authors list, the first name
        </p>
        <div className="social-icon">
          <ul>
            <li>
              <a href="#" className="">
                <i className="lab la-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <i className="lab la-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <i className="lab la-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <i className="lab la-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;

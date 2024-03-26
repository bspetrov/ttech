import React from "react";

const Recents: React.FC = () => {
  return (
    <React.Fragment>
      <div className="recent-post">
        <h5>Recent Post</h5>
        <img src="/assets/img/blog/recent-post-bg.jpg" alt="" />
        <div className="single-recent-post">
          <h6>Youth crime creativity with artistic activities!</h6>
          <p className="blog-date">
            <i className="las la-calendar"></i>April 10, 2023
          </p>
        </div>
        <img src="/assets/img/blog/recent-post-bg-2.jpg" alt="" />
        <div className="single-recent-post">
          <h6>Seven ways to support legal procedure</h6>
          <p className="blog-date">
            <i className="las la-calendar"></i>March 30, 2023
          </p>
        </div>
        <img src="/assets/img/blog/recent-post-bg-3.jpg" alt="" />
        <div className="single-recent-post">
          <h6>How to Help Your suprior attorney</h6>
          <p className="blog-date">
            <i className="las la-calendar"></i>February 18, 2023
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recents;

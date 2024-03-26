import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Author from "./Author";
import Recents from "./Recents";

const BlogArea: React.FC = () => {
  return (
    <React.Fragment>
      <div id="blog-page" className="blog-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-wrap">
                <img src="/assets/img/blog/single-blog.jpg" alt="" />
                <div className="blog-meta">
                  <span>
                    <i className="las la-user"></i>Admin
                  </span>
                  <span>
                    <i className="las la-calendar"></i>August 10, 2022
                  </span>
                  <span>
                    <i className="las la-comments"></i>2 Comments
                  </span>
                </div>
                <h3>
                  Building Mobilization can make you future leader in world
                </h3>
                <p>
                  Encouraging kids to socialize has never been more important,
                  but finding ways to do it safely right now can be tricky.
                  Thankfully, you don’t have to put your child’s social life on
                  pause. Instead, coordinate a time to do a virtual playdate on
                  Zoom or Google Hangouts with one or a few of your child’s
                  friends.
                </p>
                <p>
                  Education.com has over 34,000 resources to choose from! Visit
                  the Learning Library and use the search bar at the top of the
                  page to find your topic. You can filter results by your
                  learners’ grade level, subjects you’re interested in, type of
                  resource, and more in the bars along the top and left-hand
                  side of the page.
                </p>
                <p>
                  Look through the resources on your topic, and select the one
                  that seems most relevant to your lesson as well as most
                  engaging for your learners. For example, our search for plants
                  provided over 600 resources including activities, worksheets,
                  and lesson plans. By filtering to show first grade science
                  resources, and sorting by relevance, we narrowed down the
                  search until we selected the Parts of a Plant workbook.
                </p>
                <h5>How to create a well-rounded learning routine</h5>
                <p>
                  When children engage with the same concept in different ways,
                  it strengthens their understanding of the topic. But as
                  educators and caregivers, it can be difficult to find a range
                  of high-quality content to share with your little learners.
                  The good news is that both Education.com and IXL have
                  extensive libraries of resources and skills that you can
                  depend on for PK-5 and beyond.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="blog-inside"
                      src="/assets/img/blog/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="blog-inside"
                      src="/assets/img/blog/4.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <h5>Give An Inch, Take A Mile</h5>
                <p>
                  One day, the importer called the customer service
                  representative and said that he could not arrive at the office
                  to surrender the bill of lading that day. Instead he would fax
                  (yes that long ago) the front and back of the bill to get the
                  release, and subsequently be in the office the very next day
                  to deliver the original bill of lading as required. The
                  carrier acted in accordance and the importer was in the office
                  the next day to deliver the bill of lading as promised.
                </p>
                <hr />
                <Author />
                <hr />

                <Comments />
              </div>
              <CommentForm />
            </div>
            <div className="col-lg-4">
              <div className="blog-search">
                <form action="blog.html">
                  <input type="search" placeholder="Search here" />
                  <button type="submit">
                    <i className="las la-search"></i>
                  </button>
                </form>
              </div>
              <div className="blog-category">
                <h5>Categories</h5>
                <a className="active" href="#">
                  Industrial Ecology (8)
                </a>
                <a href="#">Civil Work (6)</a>
                <a href="#">Construction (4)</a>
                <a href="#">Mechanical (5)</a>
                <a href="#">Oil & Gas Refinery (2)</a>
              </div>
              <Recents />
              <div className="archive">
                <h5>Archive</h5>
                <a className="active" href="#">
                  Industry Renovation (25)
                </a>
                <a href="#">Factory Build (18)</a>
                <a href="#">Electrical (32)</a>
                <a href="#"> Interior (13)</a>
                <a href="#">Petrolieum (04)</a>
              </div>
              <div className="popular-tag">
                <h5>Popular Tags</h5>
                <span className="active">
                  <a href="#">construction</a>
                </span>
                <span>
                  <a href="#">civil</a>
                </span>
                <span>
                  <a href="#">welding</a>
                </span>
                <span>
                  <a href="#">building</a>
                </span>
                <span>
                  <a href="#">pilling</a>
                </span>
                <span>
                  <a href="#">renovation</a>
                </span>
              </div>
              <div className="helpline-section">
                <div className="overlay-2"></div>
                <div className="helpline-content text-center">
                  <h4>
                    Need <br />
                    Consultancy Help
                  </h4>
                  <p>Gatherin galso sprit moving shall flow</p>
                  <button type="submit">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogArea;

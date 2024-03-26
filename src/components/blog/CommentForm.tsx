import React from "react";

const CommentForm: React.FC = () => {
  return (
    <React.Fragment>
      <div className="comments-form">
        <h3>Leave A Reply</h3>
        <p>
          Your email address will not be published. Required fiels are marked
        </p>
        <div className="row">
          <div className="col-lg-12">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Write Your Comment"
            ></textarea>
          </div>
          <div className="col-lg-6">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="col-lg-6">
            <input type="email" placeholder="Email here" />
          </div>
          <div className="col-lg-12">
            <button type="submit">Post Comment</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommentForm;

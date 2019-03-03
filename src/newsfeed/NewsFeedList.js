import React from "react";

const NewsFeedList = props => {
  return (
    <React.Fragment>
      <ul id="comments">
        <li className="comment">
          <div className="avatar">
            <a href="##" className="userlink">
              <img src="" alt="userimage" className="news-image" />
            </a>
          </div>
          <div className="comment-content">
            <header className="comments-head">
              <a href="##" className="userlink">
                username with link to profile page
              </a>
              <span className="comments-span">date posted</span>
            </header>
            <p className="comment-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              error?
            </p>
          </div>
          <ul id="replies">
            <li className="comment">
              <div className="avatar">
                <a href="##" className="userlink">
                  <img src="" alt="userimage" />
                </a>
              </div>
              <div className="comment-content">
                <header className="comments-head">
                  username with link to profile page
                  <span className="comments-span">date posted</span>
                </header>
                <p className="comment-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default NewsFeedList;

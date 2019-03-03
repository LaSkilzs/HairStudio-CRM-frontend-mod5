import React from "react";
import API from "../API";

class NewsFeedList extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      conversation_id: 0
    };
  }

  handleChange = (text, id) => {
    console.log(text);
    return this.setState({
      text,
      conversation_id: id
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const comment = this.state;
    console.log(comment);
    if (API.sendComment(comment)) {
      this.setState({ text: "" });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <React.Fragment>
          <ul id="comments">
            <h1 className="feeds-header">News Feed Title</h1>
            {this.props.comments.map(comment => {
              return (
                <li className="comment">
                  <div className="avatar">
                    <a href="##" className="userlink">
                      <img src="" alt="userimage" className="news-image" />
                    </a>
                  </div>
                  <div className="comment-content">
                    <header className="comments-head">
                      <a href="##" className="userlink">
                        {this.props.user.username}
                        username with link to profile page
                      </a>
                      <span className="comments-span">date posted</span>
                    </header>
                    <p className="comment-para">
                      {comment.text}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est error?
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
                          {comment.username}
                          <span className="comments-span">date posted</span>
                        </header>
                        <p className="comment-para">
                          {comment.text}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              );
            })}
            <form
              style={{ display: "grid" }}
              onSubmit={e => this.handleSubmit(e)}
            >
              <input
                type="text"
                name="comment"
                className="news-input"
                placeholder="Enter comment"
                onChange={e =>
                  this.handleChange(
                    e.target.value,
                    this.props.activeConversations
                  )
                }
                style={{ border: "2px solid var(--brown)" }}
              />
              <button className="news-but">Submit</button>
            </form>
          </ul>
        </React.Fragment>
      </div>
    );
  }
}
export default NewsFeedList;

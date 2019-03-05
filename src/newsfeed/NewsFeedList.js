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
    if (API.sendComment(comment)) {
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <ul id="comments">
            <h1 className="feeds-header">News Feed Title</h1>
            {this.props.conversation.comments.map(comment => {
              return (
                <li className="comment">
                  <div className="avatar" />

                  <ul id="replies">
                    <li className="comment">
                      <div className="avatar">
                        <a href="##" className="userlink">
                          <img
                            src="https://www.greencointoken.com/assets/images/avatar.png"
                            alt="userimage"
                            style={{ width: "3rem" }}
                          />
                        </a>
                      </div>
                      <div className="comment-content">
                        <header className="comments-head">
                          username
                          {/* {comment.username} */}
                          <span className="comments-span">date posted</span>
                        </header>
                        <p className="comment-para">{comment.text}</p>
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

import React from "react";
import API from "../API";

class NewsFeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange = value => this.setState({ title: value });

  handleSubmit = e => {
    e.preventDefault();
    const title = this.state;
    console.log(title);
    if (API.sendConversation(title)) {
      this.props.handleReceivedConversation(title);
      this.setState({ title: " " });
    }
    this.setState({ title: " " });
    return alert("title not saved!");
  };

  render() {
    return (
      <div className="newsfeed-card">
        <div className="chatroom">
          <h2 className="chatroom-header">Open Chat Rooms</h2>
          <ul className="chatroom-ul">
            {this.props.conversations.map(conversation => {
              return (
                <li
                  className="chatroom-li"
                  key={conversation.id}
                  onClick={() => this.props.handleClick(conversation.id)}
                >
                  {conversation.title}
                </li>
              );
            })}
            {/* 
            <li className="chatroom-li">Chat Room 2</li>
            <li className="chatroom-li">Chat Room 3</li> */}
          </ul>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              name="title"
              className="news-input"
              placeholder="Create New ChatRoom"
              value={this.state.title}
              onChange={e => this.handleChange(e.target.value)}
              style={{ border: "2px solid var(--brown)" }}
            />
            <button className="news-but">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewsFeedCard;

import React from "react";
import "./newsfeed.css";
import NewsFeedList from "./NewsFeedList";
import NewsFeedCard from "./NewsFeedCard";
import CommentConnection from "../app/CommentConnection";
import { ActionCableConsumer } from "react-actioncable-provider";

class NewsFeedContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      conversations: [],
      comments: [],
      activeConversations: null
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/conversations");
    const data = await response.json();
    console.log(data);
    this.setState({ conversations: data });
  }

  handleClick = id => this.setState({ activeConversations: id });

  handleReceivedConversation = response => {
    console.log(response);
    this.setState({
      conversations: [...this.state.conversations, response]
    });
  };

  handleReceivedComment = response => {
    console.log(response);
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === response.conversation_id
    );
    console.log(conversation);
    conversation.comments = [...conversation.comments, response];

    this.setState({ conversations });
  };

  render() {
    console.log(this.state.conversations);
    const findActiveConversation = (conversations, activeConversation) => {
      return conversations.find(
        conversation => conversation.id === activeConversation
      );
    };
    return (
      <React.Fragment>
        {this.state.conversations.length > 0 ? (
          <CommentConnection
            conversations={this.state.conversations}
            handleReceivedComment={this.handleReceivedComment}
          />
        ) : null}
        <div className="newsfeed-container">
          <ActionCableConsumer
            channel={{ channel: "ConversationsChannel" }}
            onReceived={this.handleReceivedConversation}
          />

          {this.state.activeConversations > 0 ? (
            <NewsFeedList
              conversation={findActiveConversation(
                this.state.conversations,
                this.state.activeConversations
              )}
              activeConversations={this.state.activeConversations}
              handleReceivedComment={this.handleReceivedComment}
            />
          ) : null}

          <NewsFeedCard
            conversations={this.state.conversations}
            activeConversations={this.state.activeConversations}
            handleClick={this.handleClick}
            handleReceivedConversation={this.handleReceivedConversation}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NewsFeedContainer;

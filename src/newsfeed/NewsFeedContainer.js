import React from "react";
import NewsFeedList from "./NewsFeedList";

class NewsFeedContainer extends React.Component {
  render() {
    return (
      <div className="newsfeed-container">
        <h2>NewsFeed Container</h2>
        <NewsFeedList />
      </div>
    );
  }
}

export default NewsFeedContainer;

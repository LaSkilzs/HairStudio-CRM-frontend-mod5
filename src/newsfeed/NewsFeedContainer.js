import React from "react";
import "./newsfeed.css";
import NewsFeedList from "./NewsFeedList";
import NewsFeedCard from "./NewsFeedCard";

class NewsFeedContainer extends React.Component {
  render() {
    return (
      <div className="newsfeed-container">
        <NewsFeedList />
        <NewsFeedCard />
      </div>
    );
  }
}

export default NewsFeedContainer;

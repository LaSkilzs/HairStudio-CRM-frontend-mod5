import React from "react";
import NewsFeedContainer from "./NewsFeedContainer";
import API from "../API";

class NewsFeed extends React.Component {
  componentDidMount() {
    const username = localStorage.getItem("username");
    if (!username) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <section id="NewsFeed">
        <h2 className="shop-news">Shop Talk NewsFeed</h2>
        <NewsFeedContainer />
      </section>
    );
  }
}

export default NewsFeed;

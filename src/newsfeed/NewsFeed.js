import React from "react";
import NewsFeedContainer from "./NewsFeedContainer";
// import API from "../API";

class NewsFeed extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (!token) {
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

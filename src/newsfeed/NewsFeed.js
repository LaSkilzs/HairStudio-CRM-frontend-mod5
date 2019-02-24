import React from "react";
import NewsFeedContainer from "./NewsFeedContainer";

class NewsFeed extends React.Component {
  render() {
    return (
      <section id="NewsFeed">
        <h2>NewsFeed Here!</h2>
        <NewsFeedContainer />
      </section>
    );
  }
}

export default NewsFeed;

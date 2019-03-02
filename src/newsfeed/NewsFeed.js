import React from "react";
import NewsFeedContainer from "./NewsFeedContainer";
import Header from "../app/Header";
import Navbar from "../app/Navbar";

class NewsFeed extends React.Component {
  render() {
    return (
      <section id="NewsFeed">
        <Navbar />
        <Header />
        <h2>NewsFeed Here!</h2>
        <NewsFeedContainer />
      </section>
    );
  }
}

export default NewsFeed;

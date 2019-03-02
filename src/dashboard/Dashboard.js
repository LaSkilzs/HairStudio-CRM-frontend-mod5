import React from "react";
import DashboardContainer from "./DashboardContainer";
import Navbar from "../app/Navbar";
import Header from "../app/Header";

class Dashboard extends React.Component {
  render() {
    return (
      <section id="profile">
        <Navbar />
        <Header />
        <DashboardContainer />
      </section>
    );
  }
}

export default Dashboard;

import React from "react";
import DashboardContainer from "./DashboardContainer";

class Dashboard extends React.Component {
  componentDidMount() {
    const username = localStorage.getItem("username");
    if (!username) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <section id="profile">
        <DashboardContainer />
      </section>
    );
  }
}

export default Dashboard;

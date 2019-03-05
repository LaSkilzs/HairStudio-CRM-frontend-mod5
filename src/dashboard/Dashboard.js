import React from "react";
import DashboardContainer from "./DashboardContainer";

class Dashboard extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
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

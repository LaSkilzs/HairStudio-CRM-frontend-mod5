import React from "react";
import DashboardList from "./DashboardList";

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <h2>Dashboard Container</h2>
        <DashboardList />
      </div>
    );
  }
}

export default DashboardContainer;

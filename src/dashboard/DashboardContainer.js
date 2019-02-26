import React from "react";
import DashboardList from "./DashboardList";
import "./dashboard.css";

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-info">
          <div id="dashboard">
            <DashboardList />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContainer;

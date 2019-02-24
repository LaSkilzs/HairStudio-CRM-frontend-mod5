import React from "react";
import DashboardList from "./DashboardList";
import "./dashboard.css";

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h3>Welcome: UserName</h3>
          <h3>Role: Client</h3>
          <button className="dashboard-butn">see schedule</button>
        </div>
        <div className="dashboard-info">
          <div id="dashboard">
            <div className="dashboard-img">
              <h2>Analytics 1</h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOqd5vmujo6uW5pgsOu2Ipj1AXHVU9GdcNoDqlUkePg39e1Szeg"
                alt="user"
              />
              <button className="dashboard-btn">filter</button>
            </div>
            <div className="dashboard-img">
              <h2>Analytics 2</h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOqd5vmujo6uW5pgsOu2Ipj1AXHVU9GdcNoDqlUkePg39e1Szeg"
                alt="user"
              />
              <button className="dashboard-btn">filter</button>
            </div>
            <div className="dashboard-img">
              <h2>Analytics 3</h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOqd5vmujo6uW5pgsOu2Ipj1AXHVU9GdcNoDqlUkePg39e1Szeg"
                alt="user"
              />
              <button className="dashboard-btn">filter</button>
            </div>
            <div className="dashboard-img">
              <h2>Analytics 4</h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOqd5vmujo6uW5pgsOu2Ipj1AXHVU9GdcNoDqlUkePg39e1Szeg"
                alt="user"
              />
              <button className="dashboard-btn">filter</button>
            </div>
          </div>
        </div>

        <DashboardList />
      </div>
    );
  }
}

export default DashboardContainer;

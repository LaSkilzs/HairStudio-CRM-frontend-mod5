import React from "react";
import DashboardCard from "./DashboardCard";
import "../calendar/calendar.css";

const DashboardList = () => {
  return (
    <div>
      <section id="content-area">
        <div className="cards">
          <div className="cal-card dash" />
          <div className="cal-card dash" />
          <div className="cal-card dash" />
        </div>
      </section>
      <DashboardCard />
    </div>
  );
};
export default DashboardList;

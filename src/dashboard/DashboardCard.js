import React from "react";

const DashboardCard = () => {
  return (
    <div className="dashboard-card">
      <header className="dashboard-appointments">
        <h2>Previous Appointments</h2>
      </header>
      <div className="appointment">
        <h2 className="links-dashboard">Feb 28</h2>
        <h2 className="links-dashboard">10:30 am</h2>
        <h2 className="links-dashboard">hairstyle</h2>
        <h2 className="links-dashboard">stylist</h2>
        <h2 className="links-dashboard">booked</h2>
      </div>
    </div>
  );
};

export default DashboardCard;

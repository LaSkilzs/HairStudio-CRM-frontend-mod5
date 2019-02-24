import React from "react";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <header className="profile-appointments">
        <h2>Previous Appointments</h2>
      </header>
      <div className="appointment">
        <h2 className="links-profile">Feb 28</h2>
        <h2 className="links-profile">10:30 am</h2>
        <h2 className="links-profile">hairstyle</h2>
        <h2 className="links-profile">stylist</h2>
        <h2 className="links-profile">booked</h2>
      </div>
    </div>
  );
};

export default ProfileCard;

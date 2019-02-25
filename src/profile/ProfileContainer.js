import React from "react";
import ProfileList from "./ProfileList";
import { Link } from "react-router-dom";

class ProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-info">
          <div id="profile-left">
            <div className="profile-header">
              <h3>Welcome: UserName</h3>
              <h3>Role: Client</h3>
            </div>
            <div className="profile-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="user"
                className="images"
              />
            </div>
            <button className="profile-btn">book Appointment</button>
          </div>
          <div id="profile-right">
            <div className="profile-change">
              <Link to="/gallery">
                <button className="butpro">Gallery</button>
              </Link>
              <Link to="/dashboard">
                <button className="butpro">Dashboard</button>
              </Link>
            </div>
            <div className="profile-receipt">
              <h1>Next Appointment</h1>
            </div>
            <div className="appointment-reciept">
              <ul className="profile-ul">
                <li className="profile-links">
                  <strong>Hair Style: </strong>
                  Updo
                </li>
                <li className="profile-links">
                  <strong>Stylist: </strong>
                  Kim
                </li>
                <li className="profile-links">
                  <strong>Day: </strong>
                  Tuesday
                </li>
                <li className="profile-links">
                  <strong>Time:</strong>
                  10:30am
                </li>
                <li className="profile-links">
                  <strong>Cost:</strong>
                  $60.00
                </li>
                <li className="profile-links">
                  <a href="##" className="button">
                    Confirm
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ProfileList />
      </div>
    );
  }
}

export default ProfileContainer;

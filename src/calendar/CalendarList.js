import React from "react";
import CalendarCard from "./CalendarCard";

const CalendarList = () => {
  return (
    <div>
      <section id="content-area">
        <div className="head">
          <h1>Profile</h1>
          <p>Welcome, username</p>
        </div>

        <div className="cards">
          <div className="cal-card">
            <div className="user-image" />
            <span className="user-name">Chance Fountain</span>
            <span className="user-title">hair personality</span>
            <hr />
            <div className="col-md-9">
              <span className="wash">Last Wash</span>
            </div>
            <div className="col-md-9">
              <span className="chemical">Last Perm/Relaxer</span>
            </div>
            <div>
              <span className="chemical">Rinse/Color</span>
            </div>
          </div>

          <div className="cal-card">
            <div className="card col-md-4">
              <h6>Hair Appointment</h6>
              <span className="date">March 12, 2019</span>
              <div className="col-md-4">
                <span className="day-time">Tuesday @ 10:30am </span>
              </div>
              <div className="col-md-4">
                <span className="hairstyle">Updo</span>
                <span className="stylist">Kim</span>
              </div>
            </div>
          </div>

          <div className="cal-card">
            <div className="user-image" />
            <span className="user-name">Chance Fountain</span>
            <span className="user-title">hair personality</span>
            <hr />
            <div className="col-md-9">
              <span className="wash">Last Wash</span>
            </div>
            <div className="col-md-9">
              <span className="chemical">Last Perm/Relaxer</span>
            </div>
            <div>
              <span className="chemical">Rinse/Color</span>
            </div>
          </div>
        </div>
      </section>
      <CalendarCard />
    </div>
  );
};
export default CalendarList;

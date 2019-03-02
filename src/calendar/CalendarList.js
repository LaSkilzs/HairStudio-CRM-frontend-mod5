import React from "react";
import CalendarCard from "./CalendarCard";
import { Link } from "react-router-dom";

const CalendarList = props => {
  const { user, haircard, appointments, profile } = props.user;

  return (
    <div>
      <section id="content-area">
        <div className="head">
          <h1 className="headprof">Profile</h1>
          <p className="headpara">Welcome, {user.username}</p>
        </div>

        <div className="cards">
          <div className="cal-card">
            <div className="user-image">
              <img
                src={user.image}
                // alt="https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="photo"
                style={{ width: "130px", borderRadius: "50%" }}
              />
            </div>
            <span className="user-name">{profile.full_name}</span>
            <span className="user-title">{user.personality}</span>
            <hr />
            <div className="col-md-9">
              <span className="wash">Last Wash: </span>: unknown
            </div>
            <div className="col-md-9">
              <span className="chemical">Last Perm/Relaxer: </span> unknown
            </div>
            <div>
              <span className="chemical">Rinse/Color</span> unknown
            </div>
            <div className="cal-button">
              <Link to="/createprofile">
                <button className="cal-but">edit </button>
              </Link>
              <Link to="/createprofile">
                <button className="cal-but">create </button>
              </Link>
            </div>
          </div>

          <div className="cal-card">
            <div className="card">
              <h6 className="cal-appoint-head">Hair Appointment</h6>
              <hr className="cal-spacer" />
              <ul className="cal-appoint-list">
                <li className="cal-span">
                  <span className="cal-span">Date: </span>
                  <strong className="cal-strong">March 12, 2019</strong>
                </li>
                <li>
                  <span className="cal-span">Day: </span>
                  <strong className="cal-strong">Tuesday</strong>
                </li>
                <li>
                  <span className="cal-span">Time: </span>
                  <strong className="cal-strong">10:30am</strong>
                </li>
                <li>
                  <span className="cal-span">HairStyle:</span>
                  <strong className="cal-strong">Updo</strong>
                </li>
                <li>
                  <span className="cal-span">Stylist:</span>
                  <strong className="cal-strong">Kim</strong>
                </li>
              </ul>

              <div className="cal-button">
                <Link to="/createappointment">
                  <button className="cal-but">Edit </button>
                </Link>
                <Link to="/createappointment">
                  <button className="cal-but">Book </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="cal-card">
            <h3 className="cal-appoint-head">Hair Card</h3>
            <hr className="cal-spacer" />
            <ul className="cal-appoint-list">
              <li className="cal-span">
                Have you ever suffered from hair loss
              </li>
              <li>Have you been diagnosed with alopecia? </li>
              <li>Do you suffer from psoriasis to the scalp? </li>
              <li>Have you been pregnant in the last 6 months? </li>
              <li>Do you currently take any medication? </li>
              <li>Sensitive Scalp? </li>
              <li>Swim or Workout frequently? </li>
              <li>Currently have colour/rinse in your hair? </li>
              <li>Currently have hair extensions? </li>
              <li>You prefer to wash your hair: </li>
              <li>Your hair type: </li>
              <li>Your hair is: </li>
              <li>Hair Length: </li>
              <li>Your Stylist: </li>
            </ul>
            <div className="cal-button">
              <Link to="/haircard">
                <button className="cal-but">Create </button>
              </Link>
              <Link to="/haircard">
                <button className="cal-but">Edit </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CalendarCard appointments={appointments} />
    </div>
  );
};
export default CalendarList;

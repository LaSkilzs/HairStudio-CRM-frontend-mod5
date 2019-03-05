import React from "react";
import CalendarCard from "./CalendarCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CalendarList = props => {
  const { user, appointments, profile } = props.user;

  if (!user) {
    return (
      <div>
        <section id="content-area">
          <div className="head">
            <h1 className="headprof">Profile</h1>
            <p className="headpara">Welcome, User</p>
          </div>

          <div className="cards">
            <div className="cal-card">
              <div className="user-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLHcZkKEhxRYFgxpyacc8DQfMiAAfcLwABr3pG6wLxfYxUhLzrQ"
                  alt="pic"
                  style={{ width: "130px", borderRadius: "50%" }}
                />
              </div>
              <div className="user-name">
                <h3>New User</h3>
              </div>
              <div className="user-title">
                <h2 className="user-title">New Customer Ready!!</h2>
              </div>
              <hr className="cal-spacer" />
              <table className="cal-appoint-list" />
              <h1 className="cal-temp">Profile Not Created</h1>
              <div className="cal-button">
                <Link to="/createprofile">
                  <button className="cal-but">Create A Profile </button>
                </Link>
              </div>
            </div>

            <div className="cal-card">
              <div className="user-image">
                <i className="fas fa-calendar day cal-font" />
              </div>
              <div className="user-name">
                <h3>Hair Appointment</h3>
              </div>
              <div className="user-title">
                <h2 className="user-title">Current Schedule</h2>
              </div>
              <hr className="cal-spacer" />
              <table className="cal-appoint-list" />
              <h1 className="cal-temp">No Scheduled Appointments</h1>
              <div className="cal-button">
                <Link to="/createappointment">
                  <button className="cal-but">Book Today </button>
                </Link>
              </div>
            </div>

            <div className="cal-card">
              <div className="user-image">
                <i className="fas fa-image cal-font" />
              </div>
              <div className="user-name">
                <h3>Hair Card</h3>
              </div>
              <div className="user-title">
                <h2 className="user-title">Your Hair Info</h2>
              </div>
              <hr className="cal-spacer" />
              <table className="cal-appoint-list" />
              <h1 className="cal-temp">Hair Card not Created</h1>
              <div className="cal-button">
                <Link to="/haircard">
                  <button className="cal-but">Create </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CalendarCard appointments={[{}]} />
      </div>
    );
  } else {
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
                  alt="pic"
                  style={{ width: "130px", borderRadius: "50%" }}
                />
              </div>
              <span className="user-name">{profile[0].full_name}</span>
              <span className="user-title">{user.personality}</span>
              <hr />
              <table className="cal-appoint-list">
                <tr>
                  <td className="cal-quest"> Hair Type: </td>
                  <td className="cal-response">Wavy</td>
                </tr>
                <tr>
                  <td className="cal-quest">Hair is: </td>
                  <td className="cal-response">Thick</td>
                </tr>
                <tr>
                  <td className="cal-quest">Hair Length: </td>
                  <td className="cal-response"> Below Shoulders</td>
                </tr>
                <tr>
                  <td className="cal-quest">Personal Stylist </td>
                  <td className="cal-response">Kim</td>
                </tr>
              </table>
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
                <table className="cal-appoint-list">
                  <tr>
                    <td className="cal-quest"> Date: </td>
                    <td className="cal-response">March 12, 2019</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Time: </td>
                    <td className="cal-response">10:30 AM</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Estimated duration: </td>
                    <td className="cal-response"> 90 mins</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">HairStyle </td>
                    <td className="cal-response">Updo</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Beautician </td>
                    <td className="cal-response">Kim</td>
                  </tr>
                </table>
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
              <table className="cal-appoint-list">
                <tbody>
                  <tr>
                    <td className="cal-quest">
                      Have you ever suffered from hair loss
                    </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Have you been diagnosed with alopecia?
                    </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Do you suffer from psoriasis to the scalp?
                    </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Have you been pregnant in the last 6 months?{" "}
                    </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Do you currently take any medication?{" "}
                    </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Sensitive Scalp? </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Swim or Workout frequently? </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Currently have colour/rinse in your hair?
                    </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Currently have hair extensions?
                    </td>
                    <td className="cal-span">No</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">You prefer to wash your hair:</td>
                    <td className="cal-span">No</td>
                  </tr>
                </tbody>
              </table>
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
  }
};

export default CalendarList;

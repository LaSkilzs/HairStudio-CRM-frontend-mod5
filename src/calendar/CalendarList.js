import React from "react";
import CalendarCard from "./CalendarCard";
import { Link } from "react-router-dom";

const CalendarList = props => {
  const { appointments, profiles, hair_cards, hair_personalities } = props.user;
  const { user } = props;

  console.log(props);
  if (user.id) {
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
                  alt="pic"
                  style={{ width: "130px", borderRadius: "50%" }}
                />
              </div>
              <div className="user-name">
                <h3>{profiles[0].full_name}</h3>
              </div>
              <div className="user-title">
                <h2 className="user-title">{hair_personalities[0].name}</h2>
              </div>
              <hr className="cal-spacer" />
              <table className="cal-appoint-list">
                <tbody>
                  <tr>
                    <td className="cal-quest"> Hair Type: </td>
                    <td className="cal-response">{hair_cards[0].hair_type}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Hair is: </td>
                    <td className="cal-response">hair_cards[0].hair_is</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Hair Length: </td>
                    <td className="cal-response"> hair_cards[0].length</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Personal Stylist </td>
                    <td className="cal-response">Kim</td>
                  </tr>
                </tbody>
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
              <div className="user-image">
                <i className="fas fa-calendar day cal-font" />
              </div>
              <div className="user-name">
                <h3>Hair Appointment</h3>
              </div>
              <div className="user-title" />
              <hr className="cal-spacer" />
              <table className="cal-appoint-list">
                <tbody className="cal-tbody">
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
                </tbody>
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

            <div className="cal-card">
              <div className="user-image">
                <i className="fas fa-image cal-font" />
              </div>
              <div className="user-name">
                <h3>Hair Card</h3>
              </div>
              <hr className="cal-spacer" />
              <table className="cal-appoint-list">
                <tbody>
                  <tr>
                    <td className="cal-quest">
                      Have you ever suffered from hair loss
                    </td>
                    <td className="cal-span">{hair_cards[0].suffered_from_hair_loss}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Have you been diagnosed with alopecia?
                    </td>
                    <td className="cal-span">{hair_cards[0].been_diagnosed_with_alopecia}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Do you suffer from psoriasis to the scalp?
                    </td>
                    <td className="cal-span">{hair_cards[0].suffer_from_psoriasis_to_the_scalp}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Have you been pregnant in the last 6 months?
                    </td>
                    <td className="cal-span">{hair_cards[0].been_pregnant_in_the_last_6_months}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Do you currently take any medication?
                    </td>
                    <td className="cal-span">{hair_cards[0].take_any_medication}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Sensitive Scalp? </td>
                    <td className="cal-span">{hair_cards[0].have_a_sensitive_scalp}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">Swim or Workout frequently? </td>
                    <td className="cal-span">{hair_cards[0].frequently_swim_or_go_to_the_gym}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Currently have colour/rinse in your hair?
                    </td>
                    <td className="cal-span">{hair_cards[0].currently_have_colour_in_your_hair}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">
                      Currently have hair extensions?
                    </td>
                    <td className="cal-span">{hair_cards[0].used_hair_extensions_before}</td>
                  </tr>
                  <tr>
                    <td className="cal-quest">You prefer to wash your hair:</td>
                    <td className="cal-span">{hair_cards[0].wash_frequency}</td>
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
  } else {
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
  }
};

export default CalendarList;

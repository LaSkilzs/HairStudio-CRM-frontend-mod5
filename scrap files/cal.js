{
  /* <ul className="cal-appoint-list">
                  <li className="cal-span">
                    <span className="cal-span">Date: </span>
                    <strong className="cal-strong">March 12, 2019</strong>
                  </li>
                  <li>
                    <span className="cal-span">Time: </span>
                    <strong className="cal-strong">10:30am</strong>
                  </li>
                  <li>
                    <span className="cal-span">Estimated Duration: </span>
                    <strong className="cal-strong">90 mins</strong>
                  </li>
                  <li>
                    <span className="cal-span">HairStyle:</span>
                    <strong className="cal-strong">Updo</strong>
                  </li>
                  <li>
                    <span className="cal-span">Stylist:</span>
                    <strong className="cal-strong">Kim</strong>
                  </li>
                </ul> */
}

{
  /* <table className="cal-appoint-list">
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
    <td className="cal-quest">Stylist </td>
    <td className="cal-response">Kim</td>
  </tr>
</table>; */
}

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
          <h1>Profile Not Created</h1>
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
          <h1>No Scheduled Appointments</h1>
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
          <h1>Hair Card not Created</h1>
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
                  Have you been pregnant in the last 6 months?
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
                <td className="cal-quest">Currently have hair extensions?</td>
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
    <CalendarCard appointments={[{}]} />
  </div>
);

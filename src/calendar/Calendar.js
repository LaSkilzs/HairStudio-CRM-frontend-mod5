import React from "react";
import CalendarContainer from "./CalendarContainer";
import API from "../API";

class Calendar extends React.Component {
  componentDidMount() {
    const username = localStorage.getItem("username");
    API.authenticate(username).then(data => {
      if (data.error) {
        this.props.loggedOut();
      } else {
        this.loggedIn(data.username);
        this.props.history.push("/profile");
      }
    });
  }
  render() {
    return (
      <section id="profile">
        <CalendarContainer user={this.props.user} />
      </section>
    );
  }
}

export default Calendar;

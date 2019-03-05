import React from "react";
import CalendarContainer from "./CalendarContainer";

class Calendar extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (!token) {
      this.props.history.push("/login");
    }
  }

  render() {
    console.log("profile-props", this.props.user);

    return (
      <section id="profile">
        <CalendarContainer
          user={this.props.user}
          username={this.props.username}
        />
      </section>
    );
  }
}

export default Calendar;

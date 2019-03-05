import React from "react";
import CalendarContainer from "./CalendarContainer";
import API from "../API";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      haircard: [],
      appointments: [],
      profile: []
    };
  }

  // componentWillMount() {
  //   const token = localStorage.getItem("jwt");
  //   if (token) {
  //     API.authenticate().then(data => {
  //       if (data.error) {
  //         this.props.loggedOut();
  //       } else {
  //         this.loggedIn(data);
  //         this.props.history.push("/profile");
  //       }
  //     });
  //   }
  // }

  // distributeUser = () => {
  //   const { user } = this.props;
  //   return this.setState({
  //     user: {
  //       username: user.username,
  //       id: user.id,
  //       role: user.role,
  //       image: user.image,
  //       personality: user.hair_personalities
  //       // personality: "none"
  //     },
  //     haircard: user.hair_cards,
  //     profile: user.profiles,
  //     appointments: user.appointments
  //   });
  // };

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

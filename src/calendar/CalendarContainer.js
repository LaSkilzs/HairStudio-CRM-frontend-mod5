import React from "react";
import CalendarList from "./CalendarList";
import "./calendar.css";

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      haircard: [],
      appointments: [],
      profile: []
    };
  }

  componentDidMount() {
    console.log(this.props.user);
    if (this.props.user.id !== this.state.user_id) {
      const { user } = this.props;
      return this.setState({
        user: {
          username: user.username,
          id: user.id,
          role: user.role,
          image: user.image,
          personality: user.hair_personalities[0].name
          // personality: "none"
        },
        haircard: user.hair_cards[0],
        profile: user.profiles[0],
        appointments: user.appointments
      });
    } else {
      const { user } = this.props;
      return this.setState({
        user: {
          username: user.username,
          id: user.id,
          role: user.role,
          image: user.image,
          personality: "Complete Profile Card"
        },
        haircard: [{}],
        profile: [{}],
        appointments: [{}]
      });
    }
  }

  render() {
    console.log("calendar", this.state);
    return (
      <div>
        <CalendarList user={this.props.user} />
      </div>
    );
  }
}

export default CalendarContainer;

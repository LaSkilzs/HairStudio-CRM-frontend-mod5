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
  componentWillMount() {
    if (this.props.user.id !== this.state.user.id) {
      const { user } = this.props;
      return this.setState({
        user: {
          username: user.username,
          id: user.id,
          role: user.role,
          image: user.image,
          personality: user.hair_personalities[0].name
        },
        haircard: user.hair_cards[0],
        profile: user.profiles[0],
        appointments: user.appointments
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <CalendarList user={this.state} />
      </div>
    );
  }
}

export default CalendarContainer;

import React from "react";
import "./forms.css";
import API from "../API";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      birthday: "",
      email: "",
      home: "",
      mobile: "",
      city: "",
      state: "",
      zip: "",
      user_id: this.props.user.id
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const profile = this.state;
    API.createProfile(profile);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    console.log(this.props.user.id);
    return (
      <React.Fragment>
        <div className="form-container">
          <form onSubmit={e => this.onSubmit(e)} className="create">
            <h1 className="form-header">Create Profile</h1>
            <hr />
            <input
              type="text"
              className="select"
              placeholder="first name"
              name="first_name"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="last name"
              name="last_name"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="date"
              className="select"
              placeholder="birthday"
              name="birthday"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="email"
              className="select"
              placeholder="email"
              name="email"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="phone"
              className="select"
              placeholder="home phone"
              name="home"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="phone"
              className="select"
              placeholder="mobile phone"
              name="mobile"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="street_1"
              name="street_1"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="street_2"
              name="street_2"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="city"
              name="city"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="state"
              name="state"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="number"
              className="select"
              placeholder="zip"
              name="zip"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="user_id"
              name="user_id"
            />
            <button
              type="submit"
              className="primary-btn"
              style={{
                color: "var(--pink)",
                border: "2px solid purple",
                fontSize: "20px"
              }}
            >
              submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateProfile;

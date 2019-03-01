import React from "react";
import "./forms.css";

class CreateProfile extends React.Component {
  constructor() {
    super();
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
      user_id: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const profile = this.state;
    console.log(profile);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="form-container">
        <h1>Create Profile</h1>
        <form onSubmit={e => this.onSubmit(e)}>
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
            name="home_phone"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="phone"
            className="select"
            placeholder="mobile phone"
            name="mobile_phone"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="input-form"
            className="select"
            placeholder="street_1"
            name="street_1"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="input-form"
            className="select"
            placeholder="street_2"
            name="street_2"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="input-form"
            className="select"
            placeholder="city"
            name="city"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="input-form"
            className="select"
            placeholder="state"
            name="state"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="zip"
            className="select"
            placeholder="zip"
            name="zip"
            onChange={e => this.handleChange(e)}
          />
          <button type="submit" className="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateProfile;

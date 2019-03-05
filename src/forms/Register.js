import React from "react";
import "./forms.css";
import API from "../API";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      image: "",
      role: "client",
      salon_id: "1"
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = this.state;
    API.register(user).then(data => {
      this.props.updateUser(data);
      if (user !== {}) {
        this.props.loggedIn(data);
        this.props.history.push("/profile");
      } else {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          <form className="create" onSubmit={e => this.onSubmit(e)}>
            <h1 className="form-header">Create New Account</h1>
            <hr />
            <input
              type="text"
              placeholder="username"
              className="select"
              name="username"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              placeholder="password"
              className="select"
              name="password"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              placeholder="image"
              className="select"
              name="image"
              onChange={e => this.handleChange(e)}
            />
            <select
              name="role"
              className="select"
              onChange={e => this.handleChange(e)}
            >
              <option value="client">client</option>
              <option value="admin" disabled>
                admin
              </option>
              <option value="owner" disabled>
                owner
              </option>
            </select>
            <input
              type="text"
              placeholder="salon_id"
              value="1"
              disabled
              className="register"
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

export default Register;

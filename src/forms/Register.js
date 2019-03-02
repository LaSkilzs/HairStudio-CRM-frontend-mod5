import React from "react";
import "./forms.css";
import Navbar from "../app/Navbar";
import Header from "../app/Header";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
      <div className="form-container">
        <form className="create">
          <h1 className="form-header">Create New Account</h1>
          <hr/>
          <input type="text" placeholder="username" className="select" />
          <input type="text" placeholder="password" className="select" />
          <input type="text" placeholder="image" className="select" />
          <select name="role" className="select">
            <option value="client">client</option>
            <option value="admin">admin</option>
            <option value="owner">owner</option>
          </select>
          <input type="text" placeholder="salon_id" className="register" />
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

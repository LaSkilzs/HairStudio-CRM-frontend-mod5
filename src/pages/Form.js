import React from "react";

const Form = () => {
  return (
    <section id="Form">
      <div className="title">
        <h3>Form Here!!</h3>
      </div>
      <div className="form-container">
        <div className="form-content">
          <h1>Sign Up Here</h1>
          <input type="text" placeholder="Your Email" />
          <input type="submit" />
        </div>
      </div>
    </section>
  );
};

export default Form;

import React from "react";
import "../css/form.css";

const Form = () => {
  return (
    <section id="Form">
      <div className="form-content">
        <h1 className="form-title">Contact Us Today</h1>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your email"
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </section>
  );
};

export default Form;

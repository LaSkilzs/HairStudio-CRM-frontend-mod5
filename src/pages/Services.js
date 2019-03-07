import React from "react";
import "../css/services.css";
import { Link } from "react-router-dom";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const icons = [
      "fas fa-cut",
      "fas fa-female",
      "fas fa-ruler-horizontal",
      "fas fa-fist-raised",
      "fas fa-female",
      "fas fa-cut"
    ];
    return (
      <section id="Services">
        <div className="title">
          <h3>Services </h3>
          <div className="underline" />
        </div>
        <div className="services-container">
          {this.props.services.map((service, index) => (
            <article className="service-item" key={index}>
              {service.name} <i className={icons[index]} />
              <div className="service-title">
                <ul className="service-list" />
                {service.service_types.map((type, idx) => (
                  <li key={idx}>{type.name}</li>
                ))}
                <Link to="/appointment">
                  <button className="service-button">Book Today</button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;

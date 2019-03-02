import React from "react";
import "../css/services.css";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="Services">
        <div className="title">
          <h3>Services </h3>
          <div className="underline" />
        </div>
        <div className="services-container">
          {this.props.services.map((service, index) => (
            <article className="service-item" key={index}>
              {service.name} <i className="fas fa-cut" />
              <div className="service-title">
                <ul className="service-list" />
                {service.service_types.map((type, idx) => (
                  <li key={idx}>{type.name}</li>
                ))}
                <button className="service-button">Book Today</button>
              </div>
            </article>
          ))}

          {/* <i className="fas fa-female" />
          <i className="fas fa-ruler-horizontal" />
          <i className="fas fa-fist-raised" />
          <i className="fas fa-info" /> */}
        </div>
      </section>
    );
  }
}

export default Services;

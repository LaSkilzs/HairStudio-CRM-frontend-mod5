import React from "react";
import "../css/services.css";

const Services = () => {
  return (
    <section id="Services">
      <div className="title">
        <h3>Services </h3>
        <div className="underline" />
      </div>
      <div className="services-container">
        <article className="service-item">
          Wash & Styles <i className="fas fa-cut" />
          <div className="service-title">
            <ul className="service-list" />
            <button className="service-button">Book Today</button>
          </div>
        </article>
        <article className="service-item">
          Hair Chemicals <i className="fas fa-female" />
          <div className="service-title">
            <ul className="service-list" />
            <button className="service-button">Book Today</button>
          </div>
        </article>
        <article className="service-item">
          Hair Extensions <i className="fas fa-ruler-horizontal" />
          <div className="service-title">
            <ul className="service-list" />
            <button className="service-button">Book Today</button>
          </div>
        </article>
        <article className="service-item">
          Natural Hair <i className="fas fa-fist-raised" />
          <div className="service-title">
            <ul className="service-list" />
            <button className="service-button">Book Today</button>
          </div>
        </article>
        <article className="service-item">
          Additional Services <i className="fas fa-info" />
          <div className="service-title">
            <ul className="service-list" />
            <button className="service-button">Book Today</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;

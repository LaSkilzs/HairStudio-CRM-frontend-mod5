import React from "react";
import "../css/testimonial.css";

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <div className="test-title">
        <i className="fas fa-comments" />
        <h2>What they say</h2>
      </div>
      <div className="testimonial-container" />
      {/* <article className="quote">
        <img
          src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="img-quote"
        />
        <blockquote>
          <p>
            <i className="fa fa-quote-left" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            earum.
          </p>
          <footer>customer</footer>
        </blockquote>
      </article>
      <article className="quote">
        <img
          src="https://images.pexels.com/photos/938013/pexels-photo-938013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="img-quote"
        />
        <blockquote>
          <p>
            <i className="fa fa-quote-left" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            earum.
          </p>
          <footer>customer</footer>
        </blockquote>
      </article> */}
      <article className="quote">
        <img
          src="https://images.pexels.com/photos/1188079/pexels-photo-1188079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="img-quote"
        />
        <blockquote>
          <p>
            <i className="fa fa-quote-left" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            earum.
          </p>
          <footer>customer</footer>
        </blockquote>
      </article>
      <div className="testimonial-card" />
    </section>
  );
};

export default Testimonial;

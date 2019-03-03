import React from "react";
import "../css/gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section id="Gallery">
      <div className="title">
        <h3>Gallery </h3>
      </div>
      <div className="gallery-container">
        <article className="gallery-item">
          <h3 className="gallery-heading">Short Styles</h3>
          <Link to="/galleries">
            <img
              src="https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </Link>
        </article>
        <article className="gallery-item">
          <h3 className="gallery-heading">Long Styles</h3>
          <Link to="/galleries">
            <img
              src="https://images.pexels.com/photos/1865964/pexels-photo-1865964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </Link>
        </article>
        <article className="gallery-item">
          <h3 className="gallery-heading">Natural</h3>
          <Link to="/galleries">
            <img
              src="https://images.pexels.com/photos/1576482/pexels-photo-1576482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </Link>
        </article>
        <article className="gallery-item">
          <h3 className="gallery-heading">Hair Extensions</h3>
          <Link to="/galleries">
            <img
              src="https://images.pexels.com/photos/1757281/pexels-photo-1757281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Gallery;

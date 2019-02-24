import React from "react";
import GalleryList from "./GalleryList";
import "./gallery.css";

class GalleryContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="main-gallery">
          <label className="gallery-label">
            Select By Hair Style
            <select className="gallery-select">
              <option selected>Choose One</option>
              <option>Natural</option>
              <option>Hair Extensions</option>
              <option>Styled</option>
            </select>
          </label>

          <label className="gallery-label">
            Select By Length
            <select className="gallery-select">
              <option selected>Choose One</option>
              <option>above shoulders</option>
              <option>below shoulders</option>
            </select>
          </label>

          <label className="gallery-label">
            Select By Cuts
            <select className="gallery-select">
              <option selected>Choose One</option>
              <option>Long Hair</option>
              <option>Short Cuts</option>
              <option>Male Cuts</option>
            </select>
          </label>
        </div>
        <GalleryList />
      </div>
    );
  }
}

export default GalleryContainer;

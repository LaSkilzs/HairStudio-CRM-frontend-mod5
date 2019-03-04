import React from "react";
import GalleryList from "./GalleryList";
import "./gallery.css";

class GalleryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      filteredGallery: []
    };
  }

  componentWillMount() {
    this.setState({ filteredGallery: this.props.galleries });
  }

  componentDidMount() {
    const username = localStorage.getItem("username");
    if (!username) {
      this.props.history.push("/login");
    }
  }

  handleChange = value => {
    this.setState({ value });
  };

  filtered = value => {
    console.log(value);
    let filteredGallery = [...this.state.filteredGallery].filter(
      gallery => gallery.gallery_category_id === parseInt(value)
    );
    if (filteredGallery.length < 1) {
      return this.state.filteredGallery;
    } else {
      return filteredGallery;
    }
  };

  render(props) {
    return (
      <div className="dashboard-container">
        <div className="main-gallery">
          <label className="gallery-label">
            Select By Hair Style
            <select
              className="gallery-select"
              onChange={e => this.handleChange(e.target.value)}
              name="style"
            >
              <option>Choose One</option>
              <option value="3">Natural</option>
              <option value="4"> Hair Extensions</option>
              <option>Styled</option>
            </select>
          </label>

          <label className="gallery-label">
            Select By Length
            <select
              className="gallery-select"
              onChange={e => this.handleChange(e.target.value)}
              name="length"
            >
              <option>Choose One</option>
              <option value="1">above shoulders</option>
              <option value="2">below shoulders</option>
            </select>
          </label>

          <label className="gallery-label">
            Select By Cuts
            <select
              className="gallery-select"
              onChange={e => this.handleChange(e.target.value)}
              name="cuts"
            >
              <option>Choose One</option>
              <option value="2">Long Hair</option>
              <option value="1">Short Cuts</option>
              <option value="5">Male Cuts</option>
            </select>
          </label>
        </div>
        <GalleryList galleries={this.filtered(this.state.value)} />
      </div>
    );
  }
}

export default GalleryContainer;

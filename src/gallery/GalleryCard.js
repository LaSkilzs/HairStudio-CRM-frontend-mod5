import React from "react";

const GalleryCard = () => {
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        <img
          src={require("../images/shop_photos/short-cut-4a.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/short-cut-4b.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/short-cut-4d.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/short-cut-4e.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/long-hair-2.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/long-hair-3.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/long-haira.jpg")}
          alt="image1"
        />
        <img src={require("../images/short-cut-1c.jpg")} alt="image1" />
        <img
          src={require("../images/shop_photos/short-cut-2c.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/short-cut-3c.jpg")}
          alt="image1"
        />

        <img
          src={require("../images/shop_photos/kid-braids1.jpg")}
          alt="image1"
        />
        <img
          src={require("../images/shop_photos/kids-braids2.jpg")}
          alt="image1"
        />
      </div>
    </div>
  );
};

export default GalleryCard;

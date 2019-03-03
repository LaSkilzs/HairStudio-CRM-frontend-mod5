import React from "react";

const GalleryCard = props => {
  const { galleries } = props;
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        {galleries.map(gallery => {
          return <img key={gallery.id} src={gallery.image} alt="image1" />;
        })}
      </div>
    </div>
  );
};

export default GalleryCard;

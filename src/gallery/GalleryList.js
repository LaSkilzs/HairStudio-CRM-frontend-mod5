import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryList = props => {
  return (
    <div>
      <GalleryCard galleries={props.galleries} />
    </div>
  );
};
export default GalleryList;

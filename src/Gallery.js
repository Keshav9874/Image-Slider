import React from "react";
import "./Gallery.css";

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="gallery-image lazy"
          onClick={() => onImageClick(index)}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Gallery;
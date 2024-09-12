// src/Modal.js
import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Modal.css";

const Modal = ({ selectedImage, onClose, onNext, onPrev, images, onSelectImage }) => {
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!selectedImage) return null;

  return (
    <div className="modal" onClick={onClose} {...handlers}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="image-container">
          <img src={selectedImage} alt="Selected" className="modal-image zoomable" />
        </div>
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${image === selectedImage ? 'active' : ''}`}
              onClick={() => onSelectImage(index)}
            />
          ))}
        </div>
        <button className="prev-btn" onClick={onPrev}>&#8249;</button>
        <button className="next-btn" onClick={onNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Modal;

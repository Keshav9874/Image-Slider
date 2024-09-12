// src/App.js
import React, { useState } from "react";
import Gallery from "./Gallery";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [images] = useState([
    "https://images.pexels.com/photos/8462116/pexels-photo-8462116.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    "https://images.pexels.com/photos/27501815/pexels-photo-27501815/free-photo-of-a-river-flowing-through-a-forested-area.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    "https://images.pexels.com/photos/27835751/pexels-photo-27835751/free-photo-of-a-tree-with-green-apples-on-it.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    "https://images.pexels.com/photos/27854288/pexels-photo-27854288/free-photo-of-a-woman-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    "https://images.pexels.com/photos/28243575/pexels-photo-28243575/free-photo-of-a-woman-leaning-against-a-wall-in-a-black-and-white-photo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  ]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  const showNextImage = () => setSelectedImageIndex((prev) => (prev + 1) % images.length);
  const showPrevImage = () => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const selectImage = (index) => setSelectedImageIndex(index);

  return (
    <div className="App">
      <h1>Advanced Image Gallery</h1>
      <Gallery images={images} onImageClick={openModal} />
      {selectedImageIndex !== null && (
        <Modal
          selectedImage={images[selectedImageIndex]}
          onClose={closeModal}
          onNext={showNextImage}
          onPrev={showPrevImage}
          images={images}
          onSelectImage={selectImage}
        />
      )}
      </div>
  )
}
export default App;
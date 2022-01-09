import React, { useState } from "react";
import Modal from "./modal/Modal";
import "./VideoPlayer.css";
import images from "../../Images";

export default function VideoPlayer() {
  const [showModal, setShowModal] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [imageId, setImageId] = useState(0);
  let timer = null;

  const displayModal = () => {
    timer = setTimeout(() => {
      setShowModal(false);
      setTimeout(() => {
        setShowModal(true);
        setImageId((prevImage) => (prevImage + 1) % images.length);
        handleModal();
      }, 5000);
    }, 10000);
  };

  const handleModal = () => {
    displayModal();
  };

  return (
    <div className="videoPlayer">
      <video
        controls
        loop
        onPlay={handleModal}
        onPause={() => clearTimeout(timer)}
        className="videoPlayer"
      >
        <source
          src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          type="video/mp4"
          className="Avatar"
        />
      </video>
      <Modal open={showModal} featuredImage={images[imageId].image} />
    </div>
  );
}

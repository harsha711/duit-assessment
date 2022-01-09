import React from "react";
import "./Modal.css";

export default function Modal({ open, featuredImage }) {
  if (!open) return null;

  return (
    <div className="ModalOverlay">
      <h3 style={{ margin: "0 1em" }}>Check out this new merch yo!</h3>
      <img src={featuredImage} className="ModalImage" alt="Avatar" />
    </div>
  );
}

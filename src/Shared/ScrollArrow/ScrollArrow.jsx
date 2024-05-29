// ScrollArrow.jsx
import React from "react";
import "./ScrollArrow.scss"; // Assurez-vous de créer ce fichier CSS

const ScrollArrow = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-arrow" onClick={handleScroll}>
      <span className="material-symbols-outlined">south</span>
    </div>
  );
};

export default ScrollArrow;

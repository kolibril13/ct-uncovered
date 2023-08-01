// Scanner.jsx

import React, { useState, useRef, useEffect } from "react";
import scanner from "./assets/scanner.png";

const Scanner = ({ rotateDegree, setRotateDegree }) => {
  const imageRef = useRef(null);

  const handleMouseDown = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(e.clientY - y, e.clientX - x);
    const deg = rad * (180 / Math.PI) + 180;

    setRotateDegree(deg);
  };

  console.log(rotateDegree);
  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      // if mouse button is pressed
      handleMouseDown(e);
    }
  };

  return (
    <div className="background-left">
      <img
        id="centered-image"
        ref={imageRef}
        src={scanner}
        alt="scanner"
        style={{ transform: `rotate(${rotateDegree}deg)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        draggable={false}
      />
    </div>
  );
}

export default Scanner;

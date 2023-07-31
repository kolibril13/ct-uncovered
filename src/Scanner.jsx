// Scanner.jsx
import React, { useState, useRef } from "react";
import scanner from "./assets/scanner.png";

function Scanner() {
  const [angle, setAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const imageRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsRotating(true);
  };

  const handleMouseUp = (event) => {
    setIsRotating(false);
  };

  const handleMouseMove = (event) => {
    if (!isRotating) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const newAngle = Math.atan2(y, x) * (180 / Math.PI);
    setAngle(newAngle + 180);
  };

  return (
    <>
      <div className="background-left">
        <img
          id="centered-image"
          src={scanner}
          style={{ transform: `rotate(${angle}deg)` }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          ref={imageRef}
          draggable="false"
        />
      </div>
    </>
  );
}

export default Scanner;

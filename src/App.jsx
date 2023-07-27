// App.jsx
import React, { useState, useRef, useEffect } from "react";
import skeleton from "./assets/skeleton.svg";
import ring from "./assets/gradient-ring.svg";
import scanner from "./assets/scanner.png";
import "./App.css";

function App() {
  const [angle, setAngle] = useState(0);
  const [rotationStart, setRotationStart] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const imageRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsRotating(true);
    const rect = imageRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const startAngle = Math.atan2(y, x) * (180 / Math.PI);
    setRotationStart(angle - startAngle);
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
    setAngle(rotationStart + newAngle);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isRotating, angle, rotationStart]);

  return (
    <>
      <div id="background-left">
        <img
          id="centered-image"
          src={scanner}
          style={{ transform: `rotate(${angle}deg)` }}
          onMouseDown={handleMouseDown}
          ref={imageRef}
          draggable="false"
        />
      </div>

      <div id="background-right">
        <div className="skeleton-canvas">
          <img src={skeleton} className="skeletonSvg" draggable="false" />
          <img src={ring} className="ring ring1" draggable="false" />
          <img src={ring} className="ring ring2" draggable="false" />
          <img src={ring} className="ring ring3" draggable="false" />
          <img src={ring} className="ring ring4" draggable="false" />
        </div>
      </div>
    </>
  );
}

export default App;

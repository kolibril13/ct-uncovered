// Scanner.jsx
import React, { useState, useRef, useEffect } from "react";
import scanner from "./assets/scanner.png";

function Scanner() {
  const [angle, setAngle] = useState(0);
  const [rotationStart, setRotationStart] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const imageRef = useRef(null);

const handleStart = (event) => {
    event.preventDefault();
    setIsRotating(true);
    const clientX = event.type === "mousedown" ? event.clientX : event.touches[0].clientX;
    const clientY = event.type === "mousedown" ? event.clientY : event.touches[0].clientY;
    const rect = imageRef.current.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    const startAngle = Math.atan2(y, x) * (180 / Math.PI);
    setRotationStart(angle - startAngle);
  };

  const handleEnd = (event) => {
    event.preventDefault();
    setIsRotating(false);
  };

  const handleMove = (event) => {
    event.preventDefault();
    if (!isRotating) return;
    const clientX = event.type === "mousemove" ? event.clientX : event.touches[0].clientX;
    const clientY = event.type === "mousemove" ? event.clientY : event.touches[0].clientY;
    const rect = imageRef.current.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    const newAngle = Math.atan2(y, x) * (180 / Math.PI);
    setAngle(rotationStart + newAngle);
  };


  useEffect(() => {
    const image = imageRef.current;

    image.addEventListener('mousedown', handleStart);
    image.addEventListener('touchstart', handleStart);

    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);

    return () => {
      image.removeEventListener('mousedown', handleStart);
      image.removeEventListener('touchstart', handleStart);

      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);

      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
    };
  }, [isRotating, angle, rotationStart]);

  
  return (
    <div id="background-left">
      <img
        id="centered-image"
        src={scanner}
        style={{ transform: `rotate(${angle}deg)` }}
        ref={imageRef}
        draggable="false"
      />
    </div>
  );
}

export default Scanner;

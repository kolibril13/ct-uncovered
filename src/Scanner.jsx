import React, { useState, useRef, useEffect } from "react";
import scanner from "./assets/scanner.png";

const Scanner = ({ angle, setAngle, selectedAngles, setSelectedAngles }) => {
  const imageRef = useRef(null);
  const [lastAngle, setLastAngle] = useState(0); // New state variable

  const setAnglesInRange = (startAngle, endAngle) => {
    // Function to set all angles between startAngle and endAngle
    let startIndex = Math.floor(startAngle / 9) + 1;
    let endIndex = Math.floor(endAngle / 9) + 1;
    for (let i = startIndex; i <= endIndex; i++) {
      setSelectedAngles(prevAngles => ({
        ...prevAngles,
        [`angle${i}`]: true,
      }));
    }
  };

  useEffect(() => {
    let angleIndex;
    if (angle >= 0 && angle < 180) {
      angleIndex = Math.floor(angle / 9) + 1;
    } else if (angle >= 180 && angle < 360) {
      angleIndex = Math.floor((angle - 180) / 9) + 1;
    }

    if (angleIndex) {
      setAnglesInRange(lastAngle, angle); // Call the new function
      setLastAngle(angle); // Update the last angle
    }
  }, [angle]);

  const calculateRotation = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(e.clientY - y, e.clientX - x);
    const deg = rad * (180 / Math.PI) + 180;
    console.log(deg);
    setAngle(deg);
  };

  const handleMouseDown = (e) => {
    calculateRotation(e);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      calculateRotation(e);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      // Remove event listeners when the component is unmounted
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="background-left">
      <img
        id="centered-image"
        ref={imageRef}
        src={scanner}
        alt="scanner"
        style={{ transform: `rotate(${angle}deg)` }}
        onMouseDown={handleMouseDown}
        draggable={false}
      />
    </div>
  );
};

export default Scanner;

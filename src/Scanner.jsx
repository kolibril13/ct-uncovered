import React, { useState, useRef, useEffect } from "react";
import scanner from "./assets/scanner.png";

const Scanner = ({ angle, setAngle, selectedAngles, setSelectedAngles }) => {
  const imageRef = useRef(null);
  const [lastAngle, setLastAngle] = useState(null); // New state variable

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
    if (lastAngle !== null) {
      setAnglesInRange(lastAngle, angle); // Call the new function
    }
  }, [angle]);

  const calculateRotation = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(e.clientY - y, e.clientX - x);
    const deg = rad * (180 / Math.PI) + 180;
    console.log(deg);
    return deg;
  };

  const handleMouseDown = (e) => {
    const initialAngle = calculateRotation(e);
    setAngle(initialAngle); // Update the angle at the beginning of the drag
    setLastAngle(initialAngle); // Update the last angle at the beginning of the drag
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      const newAngle = calculateRotation(e);
      setAngle(newAngle);
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

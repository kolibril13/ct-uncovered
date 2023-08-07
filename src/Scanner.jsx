import React, { useState, useRef, useEffect } from "react";
import scanner from "./assets/scanner.png";

const Scanner = ({ angle, setAngle, selectedAngles, setSelectedAngles }) => {
  const imageRef = useRef(null);
  const [lastAngle, setLastAngle] = useState(null); // New state variable


  const rangeModulo = (start, end) => {
    if (start > end) {
      [start, end] = [end, start];
    }
    let result = [];
    if ((end - start) <= 10 || (end - start) > 10) {
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      for (let i = start; i <= 20; i++) {
        result.push(i);
      }
      for (let i = 1; i <= end; i++) {
        result.push(i);
      }
    }
    return result;  
  };
  

  const calculateIndex = (angle) => {
    if (angle >= 0 && angle < 180) {
      return Math.floor(angle / 9) + 1;
    } else if (angle >= 180 && angle < 360) {
      return Math.floor((angle - 180) / 9) + 1;
    }
    return 0; // #TODO: this I sould look again at.
  };
  

  const setAnglesInRange = (startAngle, endAngle) => {
    const startIndex = calculateIndex(startAngle);
    const endIndex = calculateIndex(endAngle);
  
    const angles = rangeModulo(startIndex, endIndex);
  
    angles.forEach(angle => {
      setSelectedAngles(prevAngles => ({
        ...prevAngles,
        [`angle${angle}`]: true,
      }));
    });
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
    let deg = rad * (180 / Math.PI) + 180;
    if (deg >= 360) {
      deg = deg - 360;
    }
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

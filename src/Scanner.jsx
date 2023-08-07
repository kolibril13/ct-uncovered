import React, { useState, useRef, useEffect } from "react";
import scanner from "./assets/scanner.png";

const Scanner = ({ angle, setAngle, selectedAngles, setSelectedAngles }) => {
  const imageRef = useRef(null);
  const [lastAngle, setLastAngle] = useState(null); // New state variable

  const calculateRotation = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(e.clientY - y, e.clientX - x);
    let deg = rad * (180 / Math.PI) + 180;
    if (deg >= 360) {
      deg = deg - 360;
    }
    // console.log(deg);
    return deg;
  };

  // converts values from 0-180 to 0-19
  // also, converts values from 180-360 to 0-19.
  const calculateIndex = (angle) => {
    //✅✅✅
    if (angle >= 0 && angle < 180) {
      return Math.floor(angle / 9);
    } else if (angle >= 180 && angle <= 360) {
      return Math.floor((angle - 180) / 9);
    } else {
      throw new Error("angle must be between 0 and 360");
    }
  };

  // this gives the clostest range from to values wich are in the range of 0-19. After 19, 0 comes again.
  function rangeModulo(a, b) {
    //✅✅✅
    // make sure a is less than b
    if (a > b) {
      [a, b] = [b, a];
    }

    if (a < 0) {
      throw new Error("a must be greater than 0");
    }

    if (b > 19) {
      throw new Error("b must be less than 20");
    }

    // list to store the array of numbers in the range
    let result = [];

    if (b - a <= 10) {
      for (let i = a; i <= b; i++) {
        result.push(i);
      }
    }

    // here we have this break from 18,19,0,1,2 and so we have to use modulo.
    if (b - a > 10) {
      a = a + 20;
      for (let i = b; i <= a; i++) {
        result.push(i % 20);
      }
    }

    return result;
  }

  const setAnglesInRange = (startAngle, endAngle) => {
    const startIndex = calculateIndex(startAngle);
    const endIndex = calculateIndex(endAngle);
    // console.log(startIndex, endIndex);

    const angles = rangeModulo(startIndex, endIndex);

    angles.forEach((angle) => {
      console.log(`angle${angle}`);
      setSelectedAngles((prevAngles) => ({
        ...prevAngles,
        [`angle${angle}`]: true,
      }));
    });
  };

  useEffect(() => {
    if (lastAngle !== null) {
      setAnglesInRange(lastAngle, angle); // Call the new function
    }
    setLastAngle(angle);
  }, [angle]);

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

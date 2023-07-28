import React, { useState } from "react";
import skeleton from "./assets/skeleton.svg";
import ring from "./assets/gradient-ring.svg";
import "./Skeleton.css";

function Skeleton({ slices, level, setLevel }) {
  const [showCross, setShowCross] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleClick = (index) => {
    if (!slices[index]) {
      console.log("red");
      setShowCross(true);
      setTimeout(() => setShowCross(false), 1000); // Hide cross after 1 second
    }
    if (slices[index]) {
      console.log("green");
      setShowCheck(true);
      setTimeout(() => setShowCheck(false), 1000); // Hide check after 1 second
      setLevel(level + 1);
    }
  };

  return (
    <div id="background-right">
      {showCross && <div className="cross-mark">❌</div>}
      {showCheck && <div className="check-mark">✅</div>}
      <div className="skeleton-canvas">
        <img src={skeleton} className="skeletonSvg" draggable="false" />
        <img
          src={ring}
          className="ring ring1"
          draggable="false"
          onClick={() => handleClick(0)}
        />
        <img
          src={ring}
          className="ring ring2"
          draggable="false"
          onClick={() => handleClick(1)}
        />
        <img
          src={ring}
          className="ring ring3"
          draggable="false"
          onClick={() => handleClick(2)}
        />
        <img
          src={ring}
          className="ring ring4"
          draggable="false"
          onClick={() => handleClick(3)}
        />
      </div>
    </div>
  );
}

export default Skeleton;

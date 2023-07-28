// Skeleton.jsx
import React from "react";
import skeleton from "./assets/skeleton.svg";
import ring from "./assets/gradient-ring.svg";
import "./Skeleton.css";

function Skeleton({ slices, level, setLevel }) {
  const handleClick = (index) => {
    if (!slices[index]) {
      console.log("red");
    }
    if (slices[index]) {
      console.log("green");
      setLevel(level + 1);
    }
  };
  return (
    <div id="background-right">
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

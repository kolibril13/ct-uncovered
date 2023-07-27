// Skeleton.jsx
import React from "react";
import skeleton from "./assets/skeleton.svg";
import ring from "./assets/gradient-ring.svg";
import "./Skeleton.css";

function Skeleton() {
  return (
    <div id="background-right">
      <div className="skeleton-canvas">
        <img src={skeleton} className="skeletonSvg" draggable="false" />
        <img src={ring} className="ring ring1" draggable="false" />
        <img src={ring} className="ring ring2" draggable="false" />
        <img src={ring} className="ring ring3" draggable="false" />
        <img src={ring} className="ring ring4" draggable="false" />
      </div>
    </div>
  );
}

export default Skeleton;

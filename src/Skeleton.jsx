import React, { useState } from "react";
import skeleton from "./assets/skeleton.svg";
import ring from "./assets/gradient-ring.svg";
import "./Skeleton.css";

function CheckComponent() {
  return <div className="check-mark">✅</div>;
}

function CrossComponent() {
  return <div className="cross-mark">❌</div>;
}

function Skeleton({ slices, level, setLevel }) {
  const [checks, setChecks] = useState([]);
  const [crosses, setCrosses] = useState([]);
  const [touchUsed, setTouchUsed] = useState(false);

  const handleEvent = (index) => {
    if (slices[index]) {
      addCheck();
      setLevel(level + 1);
    } else {
      addCross();
    }
  };

  const handleMouseDown = (index) => {
    if (!touchUsed) {
      handleEvent(index);
    }
  };

  const handleTouchStart = () => {
    setTouchUsed(true);
  };

  const handleTouchEnd = (index) => {
    handleEvent(index);
  };

  const addCheck = () => {
    const id = new Date().getTime();
    setChecks([...checks, id]);
    setTimeout(() => {
      setChecks((checks) => checks.filter((check) => check !== id));
    }, 1000);
  };

  const addCross = () => {
    const id = new Date().getTime();
    setCrosses([...crosses, id]);
    setTimeout(() => {
      setCrosses((crosses) => crosses.filter((cross) => cross !== id));
    }, 1000);
  };

  return (
    <div className="background-right">
      <div className="skeleton-canvas">
        <img src={skeleton} className="skeletonSvg noselect" draggable="false" />
        <img
          src={ring}
          className="ring ring1 noselect"
          draggable="false"
          onMouseDown={() => handleMouseDown(0)}
          onTouchStart={handleTouchStart}
          onTouchEnd={() => handleTouchEnd(0)}
        />
        <img
          src={ring}
          className="ring ring2 noselect"
          draggable="false"
          onMouseDown={() => handleMouseDown(1)}
          onTouchStart={handleTouchStart}
          onTouchEnd={() => handleTouchEnd(1)}
        />
        <img
          src={ring}
          className="ring ring3 noselect"
          draggable="false"
          onMouseDown={() => handleMouseDown(2)}
          onTouchStart={handleTouchStart}
          onTouchEnd={() => handleTouchEnd(2)}
        />
        <img
          src={ring}
          className="ring ring4 noselect"
          draggable="false"
          onMouseDown={() => handleMouseDown(3)}
          onTouchStart={handleTouchStart}
          onTouchEnd={() => handleTouchEnd(3)}
        />
      </div>
      {checks.map((id) => (
        <CheckComponent key={id} />
      ))}
      {crosses.map((id) => (
        <CrossComponent key={id} />
      ))}
    </div>
  );
}

export default Skeleton;

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

function Skeleton() {
  const [checks, setChecks] = useState([]);
  const [crosses, setCrosses] = useState([]);

  const addCheck = () => {
    const id = new Date().getTime();
    setChecks([...checks, id]);
    setTimeout(() => {
      setChecks(checks => checks.filter(check => check !== id));
    }, 1000);
  };

  const addCross = () => {
    const id = new Date().getTime();
    setCrosses([...crosses, id]);
    setTimeout(() => {
      setCrosses(crosses => crosses.filter(cross => cross !== id));
    }, 1000);
  };

  console.log(checks, crosses)
  return (
    <div id="background-right">
      <div className="skeleton-canvas">
        <img src={skeleton} className="skeletonSvg" draggable="false" />
        <img
          src={ring}
          className="ring ring1"
          draggable="false"
          onClick={() => addCheck()}
        />
        <img
          src={ring}
          className="ring ring2"
          draggable="false"
          onClick={() => addCheck()}
        />
        <img
          src={ring}
          className="ring ring3"
          draggable="false"
          onClick={() => addCheck()}
        />
        <img
          src={ring}
          className="ring ring4"
          draggable="false"
          onClick={() => addCheck()}
        />
      </div>
    {/* </div> */}
      {checks.map(id => <CheckComponent key={id} />)}
      {crosses.map(id => <CrossComponent key={id} />)}
    </div>
  );
}

export default Skeleton;

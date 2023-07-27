// App.jsx
import React from "react";
import skeleton from "./assets/skeleton.svg";
import ring from "./assets/gradient-ring.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="background-right">
        <div className="skeleton-canvas">
          <img src={skeleton} className="skeletonSvg" />
          <img src={ring} className="ring ring1" draggable="false" />
          <img src={ring} className="ring ring2" draggable="false" />
          <img src={ring} className="ring ring3" draggable="false" />
          <img src={ring} className="ring ring4" draggable="false" />
        </div>
      </div>
    </>
  );
}

export default App;

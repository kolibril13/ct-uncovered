import React from "react";
import "./Skeleton.css";

function CheckComponent() {
  return <div className="check-mark">✅</div>;
}

function CrossComponent() {
  return <div className="cross-mark">❌</div>;
}

function Skeleton() {
  return (
    <div id="background-right">
      <button className="button">Check!</button>
      <button className="button">Cross!</button>
      <CrossComponent />
      <CheckComponent />
    </div>
  );
}

export default Skeleton;

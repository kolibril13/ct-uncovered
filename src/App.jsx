import React, { useState, useEffect } from "react";
import Scanner from "./Scanner";
import Skeleton from "./Skeleton";
import Reconstruction from "./Reconstruction";
import "./App.css";

function App() {
  const [slices, setSlices] = useState([true, false, false, false]);
  const [angle, setAngle] = useState(0);

  const [level, setLevel] = useState(1);

  // Remember the previous level
  const [prevLevel, setPrevLevel] = useState(level);

  useEffect(() => {
    if (level > prevLevel) {
      console.log(`Level increased to ${level}`);

      if (level === 2) {
        setSlices([false, true, false, false]);
      } else if (level === 3) {
        setSlices([false, false, true, false]);
      } else if (level === 4) {
        setSlices([false, false, false, true]);
      }
    }
  }, [level]); // Re-run the effect when `level` changes

  return (
    <>
      <Reconstruction />
      <Scanner angle={angle} setAngle={setAngle} />
      <Skeleton slices={slices} level={level} setLevel={setLevel} />
    </>
  );
}

export default App;

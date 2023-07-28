import React, { useState, useEffect } from "react";
import Scanner from "./Scanner";
import Skeleton from "./Skeleton";
import "./App.css";

function App() {
  const [slices, setSlices] = useState([false, false, false, true]);
  const [level, setLevel] = useState(1);

  // Remember the previous level
  const [prevLevel, setPrevLevel] = useState(level);

  useEffect(() => {
    if (level > prevLevel) {
      console.log(`Level increased to ${level}`);
      setPrevLevel(level);
    }
  }, [level]); // Re-run the effect when `level` changes

  return (
    <>
      <Scanner />
      <Skeleton slices={slices} level={level} setLevel={setLevel} />
    </>
  );
}

export default App;

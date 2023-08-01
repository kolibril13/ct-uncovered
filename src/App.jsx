import React, { useState, useEffect } from "react";
import Scanner from "./Scanner";
import Skeleton from "./Skeleton";
import Reconstruction from "./Reconstruction";

import all_data from "./assets/ct_slice_730_upper_legs_continuous.json";

import "./App.css";

function App() {
  const jsonData = all_data["imgs"];
  const [level, setLevel] = useState(1);
  const [slices, setSlices] = useState([true, false, false, false]);
  const [angle, setAngle] = useState(0);
  const [selectedAngles, setSelectedAngles] = useState({
    angle1: false,
    angle2: false,
    angle3: false,
    angle4: false,
    angle5: false,
    angle6: false,
    angle7: false,
    angle8: false,
    angle9: false,
    angle10: false,
    angle11: false,
    angle12: false,
    angle13: false,
    angle14: false,
    angle15: false,
    angle16: false,
    angle17: false,
    angle18: false,
    angle19: false,
    angle20: false,
  });

  useEffect(() => {
    let angleIndex;
    
    if (angle >= 0 && angle < 180) {
      angleIndex = Math.floor(angle / 9) + 1;
    } else if (angle >= 180 && angle < 360) {
      angleIndex = Math.floor((angle - 180) / 9) + 1;
    }
    // console.log(angleIndex);
    if (angleIndex) { // make sure angleIndex is defined
      setSelectedAngles((prevAngles) => ({
        ...prevAngles,
        [`angle${angleIndex}`]: true,
      }));
    }
  }, [angle]);
  
  // console.log(selectedAngles);



  // Remember the previous level
  const [prevLevel, setPrevLevel] = useState(level);

  useEffect(() => {
    if (level > prevLevel) {
      // console.log(`Level increased to ${level}`);

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
      <Reconstruction jsonData={jsonData} selectedAngles={selectedAngles} />
      <Scanner rotateDegree={angle} setRotateDegree={setAngle} />
      <Skeleton slices={slices} level={level} setLevel={setLevel} />
    </>
  );
}

export default App;

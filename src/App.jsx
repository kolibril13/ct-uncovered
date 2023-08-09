import React, { useState, useEffect } from "react";
import Scanner from "./Scanner";
import Skeleton from "./Skeleton";
import Reconstruction from "./Reconstruction";
import CircleArcs from "./CircleArcs";
import Intro from "./Intro";
import all_data from "./assets/ct_slice_730_upper_legs_continuous.json";
import HideRight from "./HideRight";
import "./App.css";

function Sloagan() {
  return (
    <div className="slogan">
      <h1>CT uncovered</h1>
    </div>
  );
}

function App() {
  const jsonData = all_data["imgs"];
  const [level, setLevel] = useState(1);
  const [slices, setSlices] = useState([false, true, false, false]);
  const [prevAngle, setPrevAngle] = useState(null); // For the reference angle
  const [angle, setAngle] = useState(-360); // same as 0 but 0 should not be selected on the first render.
  const [showIntro, setShowIntro] = useState(false);
  // set true for production

  const [selectedAngles, setSelectedAngles] = useState({
    angle0: false,
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
  });

  // console.log(selectedAngles);

  // Remember the previous level
  const [prevLevel, setPrevLevel] = useState(level);

  useEffect(() => {
    if (level > prevLevel) {
      // console.log(`Level increased to ${level}`);

      if (level === 2) {
        setSlices([false, true, false, false]);
        setSelectedAngles((prevAngles) => {
          const newAngles = {};
          for (let i = 0; i < 20; i++) {
            newAngles[`angle${i}`] = false;
          }
          return newAngles;
        });
        setPrevAngle(null);
        setAngle(-360);
      } else if (level === 3) {
        setSlices([false, false, true, false]);
      } else if (level === 4) {
        setSlices([false, false, false, true]);
      }
    }
  }, [level]); // Re-run the effect when `level` changes

  const showAngleSelectionHint =
    !showIntro &&
    level === 1 &&
    !Object.values(selectedAngles).every((angle) => angle === true);

  const allAnglesSelectedHint =
    !showIntro &&
    level == 1 &&
    Object.values(selectedAngles).every((angle) => angle === true);

  const startLevel2Hint =
    level == 2 &&
    Object.values(selectedAngles).every((angle) => angle === false);

  let MessageOverScanner = () => <div></div>;

  if (showAngleSelectionHint) {
    MessageOverScanner = () => (
      <div>
        Select angles here <br /> 👇
      </div>
    );
  }

  if (allAnglesSelectedHint) {
    MessageOverScanner = () => (
      <>
        {/* <div className="message1"> */}
        Aweseome! <br /> Seems like this is the part of a human body. <br />
        Can you now find the plane on the right side? 👉
        {/* </div> */}
      </>
    );
  }

  if (startLevel2Hint) {
    MessageOverScanner = () => (
      <div>
        Well done! <br /> Now go on with the next slice!
      </div>
    );
  }

  return (
    <>
      {showIntro && <Intro onStart={() => setShowIntro(false)} />}
      {!showIntro && <Sloagan />}
      {showAngleSelectionHint && (
        <>
          <HideRight />
        </>
      )}

      <Reconstruction jsonData={jsonData} selectedAngles={selectedAngles} />
      <CircleArcs selectedAngles={selectedAngles} />
      <Scanner
        angle={angle}
        setAngle={setAngle}
        prevAngle={prevAngle}
        setPrevAngle={setPrevAngle}
        selectedAngles={selectedAngles}
        setSelectedAngles={setSelectedAngles}
        MessageOverScanner={MessageOverScanner}
      />
      <Skeleton slices={slices} level={level} setLevel={setLevel} />
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Scanner from "./Scanner";
import Skeleton from "./Skeleton";
import Reconstruction from "./Reconstruction";
import CircleArcs from "./CircleArcs";
import Intro from "./Intro";
import Outro from "./Outro";
import HideRight from "./HideRight";
import "./App.css";
import pako from "pako";
import InfoModal from "./InfoModal";

function Slogan() {
  return (
    <div className="slogan">
      <h1>CT uncovered</h1>
    </div>
  );
}

function App() {
  const [level, setLevel] = useState(1);
  const [slices, setSlices] = useState([false, true, false, false]);
  const [prevAngle, setPrevAngle] = useState(null); // For the reference angle
  const [angle, setAngle] = useState(-360); // same as 0 but 0 should not be selected on the first render.
  const [showIntro, setShowIntro] = useState(true);

  const [testData, setTestData] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const getURL = (level) => {
    switch (level) {
      case 1:
        return "ct_slice_730_upper_legs.json.gzip";
      case 2:
        return "ct_slice_1542_teeth.json.gzip";
      case 3:
        return "ct_slice_1342_breast.json.gzip";
      case 4:
        return "ct_slice_69_feet.json.gzip";
      case 5:
      default:
        return "ct_slice_730_upper_legs.json.gzip";
    }
  };

  console.log("level", level);

  useEffect(() => {
    const url = getURL(level);

    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        // Decompress the data using pako
        const decompressedData = pako.inflate(new Uint8Array(buffer), {
          to: "string",
        });
        return JSON.parse(decompressedData);
      })
      .then((data) => setTestData(data))
      .catch((error) => console.error("There was an error!", error));
  }, [level]);

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

  const clearAngles = (prevAngles) => {
    const newAngles = {};
    for (let i = 0; i < 20; i++) {
      newAngles[`angle${i}`] = false;
    }
    return newAngles;
  };

  const levelSlices = [
    [false, true, false, false], // Level 1
    [false, false, false, true], // Level 2
    [false, false, true, false], // Level 3
    [true, false, false, false], // Level 4
  ];

  // Remember the previous level
  const [prevLevel, setPrevLevel] = useState(level);

  useEffect(() => {

    setSlices(levelSlices[level - 1] || []);
    setSelectedAngles(clearAngles);
    setPrevAngle(null);
    setAngle(-360);
    setPrevLevel(level); // Update the previous level

  }, [level]);

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
      <div className="texthint">
        Select angles here <br /> 👇
      </div>
    );
  }

  if (allAnglesSelectedHint) {
    MessageOverScanner = () => (
      <>
      <div className="texthint">
        Aweseome! <br /> Seems like this is a part of the human body. <br />
        Can you now find the plane on the right side? 👉
        </div>
      </>
    );
  }

  if (startLevel2Hint) {
    MessageOverScanner = () => (
      <div className="texthint">
        Well done! <br /> Now go on with the next slice! <br /> 👇
      </div>
    );
  }

  return (
    <>
      {showIntro && <Intro onStart={() => setShowIntro(false)} />}
      {level == 5 && (
        <Outro
          onStart={() => {
            setLevel(1);
          }}
        />
      )}

      {!showIntro && (
        <>
          <Slogan />
          <button onClick={toggleModal} className="info-button">
            ⓘ
          </button>
          <InfoModal show={showModal} close={toggleModal} />
        </>
      )}
      {showAngleSelectionHint && (
        <>
          <HideRight />
        </>
      )}

      <Reconstruction
        selectedAngles={selectedAngles}
        level={level}
        uncompressedData={testData}
      />
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

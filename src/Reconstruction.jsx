import { useState } from "react";
import MatrixImage from "./MatrixImage";
import data from "./assets/ct_slice_730_upper_legs_continuous.json";
import CircleArcs from './CircleArcs';

function Reconstruction({ selectedAngles }) {
  const [mytracker, setMyTracker] = useState(0);
  const mydata = data["imgs"];

  // Create matrices from data
  const matrices_from_data = Object.values(mydata).map((matrix) => {
    return matrix.map((row) => {
      return Float32Array.from(row);
    });
  });

  // Filter matrices based on selectedAngles
  const selectedMatrices = matrices_from_data.filter((matrix, index) => {
    const angleKey = `angle${index + 1}`;
    return selectedAngles[angleKey];
  });

  var start = new Date().valueOf();

  // Create an empty matrix to store the result
  const resultMatrix = new Array(360)
    .fill(0)
    .map(() => new Float32Array(360).fill(0));

  // Add each matrix to the result
  for (let matrix of selectedMatrices) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        resultMatrix[i][j] -= Math.floor(matrix[i][j] * 20);
      }
    }
  }
  let duration = new Date().valueOf() - start;

  function handleClick() {
    setMyTracker(mytracker + 1);
  }

  return (
    <div className="background-left">
      {/* <p>T1 = {duration} ms </p> */}
      {/* <p>Tracker = {mytracker}</p> */}
      {/* <button onClick={handleClick}>Restart</button> */}
      <MatrixImage matrix={resultMatrix} />
      {/* <CircleArcs selectedAngles={selectedAngles} /> */}

    </div>
  );
}

export default Reconstruction;

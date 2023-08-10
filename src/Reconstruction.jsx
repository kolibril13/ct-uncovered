import React, { useState, useRef, useEffect } from "react";
wimport MatrixImage from "./MatrixImage";

const Reconstruction = React.memo(function CircleArcs({
  selectedAngles,
  uncompressedData,
}) {
  const [mytracker, setMyTracker] = useState(0);

  // Check if uncompressedData is null and render a loading message
  if (!uncompressedData) {
    return <p>Loading...</p>;
  }
  // Create matrices from data
  const matrices_from_data = uncompressedData.data

  // Filter matrices based on selectedAngles
  const selectedMatrices = matrices_from_data.filter((matrix, index) => {
    const angleKey = `angle${index}`;
    return selectedAngles[angleKey];
  });

  // var start = new Date().valueOf();

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
  // let duration = new Date().valueOf() - start;

  // function handleClick() {
  //   setMyTracker(mytracker + 1);
  // }

  return (
    <div className="background-left">
      {/* <p>T1 = {duration} ms </p> */}
      {/* <p>Tracker = {mytracker}</p> */}
      {/* <button onClick={handleClick}>Restart</button> */}
      <MatrixImage matrix={resultMatrix} />
      {/* <CircleArcs selectedAngles={selectedAngles} /> */}
    </div>
  );
});

export default Reconstruction;

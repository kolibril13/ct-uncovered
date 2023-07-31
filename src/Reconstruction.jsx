import React, { useEffect, useRef } from "react";
import * as math from "mathjs";
import jsonData from "./assets/tooth_discrete.json";
// Linear congruential generator (LCG)
function lcg(seed) {
  let state = seed;
  return () => {
    state = (1664525 * state + 1013904223) & 0xffffffff;
    return state / 0xffffffff;
  };
}

function MatrixImage({ matrix }) {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgData = ctx.createImageData(matrix.length, matrix[0].length);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const idx = (i + j * matrix.length) * 4;
        const value = matrix[i][j];
        imgData.data[idx] = value; // Red channel
        imgData.data[idx + 1] = value; // Green channel
        imgData.data[idx + 2] = value; // Blue channel
        imgData.data[idx + 3] = 255; // Alpha channel (fully opaque)
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }, [matrix]);

  return (
    <canvas ref={canvasRef} width={matrix.length} height={matrix[0].length} />
  );
}

function Reconstruction({ angle }) {
  const getRandomIntMatrix = () => {
    const seed = Date.now(); // Get current time in milliseconds as the seed
    const rng = lcg(seed); // Create a seedable random number generator
    const randomIntMatrixArray = Array.from(
      { length: 309 },
      () => Array.from({ length: 309 }, () => Math.floor(rng() * 256)) // Use rng() to get a random number with the seed
    );

    // Convert it to a matrix
    return math.matrix(randomIntMatrixArray);
  };

  // Generate the randomIntMatrix with the time-based seed
  const randomIntMatrix = getRandomIntMatrix();

  console.log(randomIntMatrix);

  const matrixA = math.zeros(309, 309);

  const matrixB = math.zeros(309, 309);

  const result = math.add(matrixA, matrixB);
  console.log(jsonData);

  const list_of_projections_all = [];

  // read image arrays from json
  for (let key of Object.keys(jsonData)) {
    let image = math.matrix(jsonData[key]);
    // var img = nj.array(chapter_content, "float32");

    image = math.multiply(image, 100);
    list_of_projections_all.push(image);
  }

  //benchmark timer
//   var start = new Date().valueOf();

  return (
    <div>
      {/* <MatrixImage matrix={randomIntMatrix.toArray()} />{" "} */}
      <MatrixImage matrix={list_of_projections_all[2].toArray()} />{" "}
      {/* Convert math.js matrix to a regular array */}
      <h1>Result</h1>
    </div>
  );
}

export default Reconstruction;

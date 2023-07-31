import React, { useEffect, useRef } from 'react';
import * as math from "mathjs";


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

function Reconstruction() {
  const randomIntMatrixArray = Array.from({ length: 100 }, () =>
    Array.from({ length: 100 }, () => Math.floor(math.random() * 256))
  );

  // Convert it to a matrix
  const randomIntMatrix = math.matrix(randomIntMatrixArray);

  console.log(randomIntMatrix);

  const matrixA = math.zeros(3, 3);

  const matrixB = math.zeros(3, 3);

  const result = math.add(matrixA, matrixB);
  console.log(result);
  
  return (
      <div>
        <MatrixImage matrix={randomIntMatrixArray} />
      <h1>Resul</h1>
    </div>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import jsonData from './assets/tooth_discrete.json'
// import nj from "numjs";

// function Reconstruction() {

//     console.log(jsonData)
//     const list_of_projections_all = [];

//   return <h1 className="background-left">Reconstruction</h1>;
// }

export default Reconstruction;

import React, { useEffect } from 'react';
import * as math from 'mathjs';

function Reconstruction() {
    const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];

  const result = math.add(matrixA, matrixB);

  return (
    <div>
      <h1>Result:</h1>
      {result.map((row, i) => 
        <div key={i}>
          {row.join(', ')}
        </div>
      )}
    </div>
  );
};



// import React, { useState, useRef, useEffect } from "react";
// import jsonData from './assets/tooth_discrete.json'
// import nj from "numjs";

// function Reconstruction() {

//     console.log(jsonData)
//     const list_of_projections_all = [];

//   return <h1 className="background-left">Reconstruction</h1>;
// }

export default Reconstruction;
import React, { useEffect, useRef, useState } from "react";
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

function Reconstruction({ jsonData }) {
  const [count, setCount] = useState(0);
  function handelClick() {
    console.log("hi");
    setCount(count + 1);
  }

  let list_of_projections_all = [];
  for (let key of Object.keys(jsonData)) {
    let image = math.matrix(jsonData[key]);
    list_of_projections_all.push(image);
  }

  let img_final = math.matrix(math.ones([360, 360]));
  console.log(img_final);
  var start = new Date().valueOf();
  // read image arrays from json
  for (let i = 0; i < list_of_projections_all.length-15; i++) {
    img_final = math.add(img_final, list_of_projections_all[i]);
  }

  img_final = math.multiply(img_final, 1 / list_of_projections_all.length);
  img_final = math.add(img_final, 1);
  img_final = math.multiply(img_final, 70);

  let duration = new Date().valueOf() - start;

  return (
    <div>
      <MatrixImage matrix={img_final.toArray()} />{" "}
      <h1>Hi result {duration} ms </h1>
      <button onClick={handelClick}>Hi</button>
    </div>
  );
}

export default Reconstruction;

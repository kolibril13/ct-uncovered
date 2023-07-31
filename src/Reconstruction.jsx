import React, { useEffect, useRef } from "react";
import * as math from "mathjs";
import jsonData from "./assets/tooth_discrete.json";

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
  var start = new Date().valueOf();

  const list_of_projections_all = [];

  // read image arrays from json
  for (let key of Object.keys(jsonData)) {
    let image = math.matrix(jsonData[key]);
    // var img = nj.array(chapter_content, "float32");

    image = math.multiply(image, 100);
    list_of_projections_all.push(image);
  }

  return (
    <div>
      {/* <MatrixImage matrix={randomIntMatrix.toArray()} />{" "} */}
      <MatrixImage matrix={list_of_projections_all[0].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[1].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[2].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[3].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[4].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[5].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[6].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[7].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[8].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[9].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[10].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[11].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[12].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[13].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[14].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[15].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[16].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[17].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[18].toArray()} />{" "}
      <MatrixImage matrix={list_of_projections_all[19].toArray()} />{" "}
      <h1>Hi result {new Date().valueOf() - start} ms </h1>
    </div>
  );
}

export default Reconstruction;

// math.add(matrixA, matrixB);

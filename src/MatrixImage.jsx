import React, { useRef, useEffect } from "react";

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
  
  export default MatrixImage;
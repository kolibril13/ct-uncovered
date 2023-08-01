import React, { useEffect, useRef } from "react";

function CircleArcs({selectedAngles}) {
  const svgRef = useRef(null);

  useEffect(() => {
    const radius = 50; // Define your circle's radius
    let startAngle = 0;
    let endAngle = 9;
    const centerX = 100; // Define center coordinates
    const centerY = 100;

    const colors = [
      "#19bde3",
      "#1ab7e0",
      "#1bb1de",
      "#1cabdb",
      "#1da5d9",
      "#1f9fd6",
      "#209ad4",
      "#2194d1",
      "#228fcf",
      "#238acd",
      "#2486ca",
      "#2581c8",
      "#267cc5",
      "#2778c3",
      "#2874c1",
      "#2870be",
      "#296cbc",
      "#2a68ba",
      "#2b64b7",
      "#2c61b5",
    ];

    for (let i = 0; i < 20; i++) {
      let start = {
        x: centerX + radius * Math.cos((Math.PI * startAngle) / 180),
        y: centerY + radius * Math.sin((Math.PI * startAngle) / 180),
      };

      let end = {
        x: centerX + radius * Math.cos((Math.PI * endAngle) / 180),
        y: centerY + radius * Math.sin((Math.PI * endAngle) / 180),
      };

      let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      let d = [
        "M",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        largeArcFlag,
        1,
        end.x,
        end.y,
      ].join(" ");

      let newElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      newElement.setAttribute("d", d);
      newElement.setAttribute("stroke", selectedAngles[`angle${i+1}`] ? colors[i] : "black"); // Select color from array or black if not selected
      newElement.setAttribute("stroke-width", "10"); // Set stroke width
      newElement.setAttribute("fill", "none");

      if (svgRef.current) {
        svgRef.current.appendChild(newElement);
      }

      startAngle += 9;
      endAngle += 9;
    }
  }, [selectedAngles]);

  return <svg ref={svgRef} width="200" height="200" />;
};

export default CircleArcs;

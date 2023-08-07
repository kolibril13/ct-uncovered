import React, { useEffect, useRef } from "react";

function CircleArcs({ selectedAngles }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const radius = 100;
    const centerX = 200;
    const centerY = 200;

    const colors = [
      "#2c61b5",
      "#2b64b7",
      "#2a68ba",
      "#296cbc",
      "#2870be",
      "#2874c1",
      "#2778c3",
      "#267cc5",
      "#2581c8",
      "#2486ca",
      "#238acd",
      "#228fcf",
      "#2194d1",
      "#209ad4",
      "#1f9fd6",
      "#1da5d9",
      "#1cabdb",
      "#1bb1de",
      "#1ab7e0",
      "#19bde3",
    ];

    const drawArcs = (startAngle, endAngle, reverse) => {
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
        if (reverse) {
          newElement.setAttribute(
            "stroke",
            selectedAngles[`angle${i}`] ? colors[19-i] : "lightgrey"
          );
        } else {
          newElement.setAttribute(
            "stroke",
            selectedAngles[`angle${i}`] ? colors[i] : "lightgrey"
          );
        }

        newElement.setAttribute("stroke-width", "20");
        newElement.setAttribute("fill", "none");

        if (svgRef.current) {
          svgRef.current.appendChild(newElement);
        }

        startAngle += 9;
        endAngle += 9;
      }
    };

    drawArcs(0, 9, false);
    drawArcs(180, 189, true); // Start drawing from the opposite side
  }, [selectedAngles]);

  return (
    <div className="background-left">
      <svg className="my_outer_circle" ref={svgRef} viewBox="0 0 400 400" />
    </div>
  );
}

export default CircleArcs;

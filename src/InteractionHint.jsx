import React, { useState, useEffect } from "react";
import "./InteractionHint.css";

// shows a hint while `active` turns true, hides it again after `duration` ms or when dismissed
export function useTimedHint(active, duration = 2000) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [active, duration]);

  return [visible, () => setVisible(false)];
}

// cursor with a pulsing purple circle. With `drag`, it moves along an arc to indicate click and rotate.
function InteractionHint({ visible, drag = false }) {
  const classes = [
    "interaction-hint",
    drag && "interaction-hint--drag",
    !visible && "interaction-hint--hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {drag && (
        <svg className="interaction-hint__arc" viewBox="0 0 100 100">
          <defs>
            <marker
              id="hint-arrow"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#9959CD" />
            </marker>
          </defs>
          <path
            d="M 13.6 71 A 42 42 0 0 1 13.6 29"
            fill="none"
            stroke="#9959CD"
            strokeWidth="1"
            strokeDasharray="2 2"
            markerEnd="url(#hint-arrow)"
          />
        </svg>
      )}
      <div className="interaction-hint__orbit">
        <div className="interaction-hint__pointer">
          <span className="interaction-hint__circle" />
          <svg className="interaction-hint__cursor" viewBox="0 0 24 24">
            <path
              d="M1 1 L1 19 L6 14.5 L9.5 22 L12.5 20.7 L9 13.3 L15.5 13.3 Z"
              fill="#ffffff"
              stroke="#2D2D51"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default InteractionHint;

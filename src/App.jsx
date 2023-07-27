// App.jsx
import React, { useState } from "react";
import Scanner from "./Scanner";
import Skeleton from "./Skeleton";
import "./App.css";

function App() {
  const [slices, setSlices] = useState([false, false, false, true]);

  return (
    <>
      <Scanner />
      <Skeleton slices={slices} setSlices={setSlices} />
    </>
  );
}

export default App;

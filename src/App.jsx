// App.jsx
import React, { useState } from "react";
import Scanner from "./Scanner";
import Skeleton from "./Skeleton";
import "./App.css";

function App() {
  const [slices, setSlices] = useState([false, false, false, true]);
  const [level, setLevel] = useState(1); 
  return (
    <>
      <Scanner />
      <Skeleton slices={slices} setSlices={setSlices} level = {level} setLevel={setLevel}/>
    </>
  );
}

export default App;

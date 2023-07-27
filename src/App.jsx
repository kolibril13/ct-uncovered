// App.jsx
import SVGPlanet from "./assets/jupiter.svg";
import ring from "./assets/gradient-ring.svg";
import "./App.css";

function App() {
  return (
    <div className="planet orange">
        {/* <img src={SVGPlanet} className="planetX" /> */}
        <img src={ring} className="ring ring1" /> 
        <img src={ring} className="ring ring2"  />
        <img src={ring} className="ring ring3"  />
    </div>
  );
}

export default App;

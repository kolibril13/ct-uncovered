import SVGPlanet from "./assets/jupiter.svg";
import ring from "./assets/gradient-ring.svg";
import "./App.css";

function App() {
  return (
    <div className="planet orange">
        {/* <img src={SVGPlanet} className="planetX" /> */}
        <img src={ring} className="ring" /> 
        <img src={ring} className="ring"  />
    </div>
  );
}

export default App;

import SVGPlanet from "./assets/jupiter.svg";
import ring from "./assets/gradient-ring.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="planet blue">
        <img src={ring} className="ring" />
      </div>


      <div className="planet green">

        <img src={ring} className="ring" />
      </div>

      <div className="planet orange">
        <img src={SVGPlanet} className="planetX" />
        <img src={ring} className="ring" />
      </div>
    </>
  );
}

export default App;

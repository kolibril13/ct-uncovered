// App.jsx
import SVGPlanet from "./assets/Skelett.svg";
import ring from "./assets/gradient-ring.svg";
import "./App.css";

function App() {
  return (
    <div className="planet">
        <img src={SVGPlanet} className="planetX" />
        <img src={ring} className="ring ring1" draggable="false"/> 
        <img src={ring} className="ring ring2" draggable="false" />
        <img src={ring} className="ring ring3" draggable="false"/>
        <img src={ring} className="ring ring4" draggable="false"/>

    </div>
  );
}

export default App;

import reactLogo from "./assets/jupiter.svg";
import ring from "./assets/gradient-ring.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="planet">
        <img src={ring} className="ring" />
      </div>

      <div className="containerX">
        <img src={reactLogo} className="planetX" />
        <div>
          <img src={ring} className="myringX"/>
        </div>
      </div>
    </>
  );
}

export default App;

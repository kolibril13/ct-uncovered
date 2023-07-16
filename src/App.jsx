import reactLogo from "./assets/jupiter.svg";
import "./App.css";

function App() {
  return (
    <>
      <img src={reactLogo} className="jupiter" alt="React logo" />
      <div className="planet">
        <div className="ring"></div>
      </div>
    </>
  );
}

export default App;

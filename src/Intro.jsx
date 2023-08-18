import mygif from "./assets/demo.gif";

function Intro({ onStart }) {
  return (
    <div className="intro">
      <div className="logo">
        <h1>CT uncovered</h1>
        <p>A webapp to explore image reconstruction in a CT scanner.</p>
        
        <img src={mygif} alt="Demo GIF" />
        <button onClick={onStart}>Start</button>

      </div>
    </div>
  );
}

export default Intro;

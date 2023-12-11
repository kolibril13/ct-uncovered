import mygif from "./assets/demo.gif";
import { Tweet } from "react-tweet";

function Outro({ onStart }) {
  return (
    <div className="intro">
      <div className="logo">
        <h1>Well done!</h1>
        <button onClick={onStart}>Restart</button>
        <p>If you liked this webapp, you can learn more here: </p>
        <Tweet id="1696554901977899140" />
      </div>
    </div>
  );
}

export default Outro;

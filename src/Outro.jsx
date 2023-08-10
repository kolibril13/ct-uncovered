import mygif from "./assets/demo.gif";

function Outro({ onStart }) {
  return (
    <div className="intro">
      <div className="logo">
        <h1>Well done!</h1>
        <p>If you liked this webapp, feel free to retweet this announcement tweet: --insert link here-- </p>
        <button onClick={onStart}>Restart</button>

      </div>
    </div>
  );
}

export default Outro;

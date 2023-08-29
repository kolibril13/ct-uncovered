import mygif from "./assets/demo.gif";

function Outro({ onStart }) {
  return (
    <div className="intro">
      <div className="logo">
        <h1>Well done!</h1>
        <p>If you liked this webapp, feel free to retweet this announcement tweet: <a href="https://twitter.com/kolibril13/status/1696554938225053714">https://twitter.com/kolibril13/status/1696554938225053714</a>   </p>
        <button onClick={onStart}>Restart</button>

      </div>
    </div>
  );
}

export default Outro;

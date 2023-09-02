import { Tweet } from "react-tweet";

const InfoModal = ({ show, close }) => {
  return show ? (
    <div className="intro">
      <div className="modal-content">
        {/* <div className="logo right-aligned "> */}
        <h1>CT uncovered</h1>
        <p>
          This is a webapp to explore image reconstruction in a CT scanner.{" "}
          <br></br>
          Select angles on the left side, and then try to find the corresponding
          slice on the right.
        </p>

        <p>
          {" "}
          This project was made for the Summer of Math Exposition 2023 by and
          the source code is available on{" "}
          <a href="https://github.com/kolibril13/ct-uncovered">GitHub</a> .
        </p>
        <p> Learn more about CT scans in my this thread:</p>

        <Tweet id="1696554901977899140" />
        <button className="modalbutton" onClick={close}>
          Close{" "}
        </button>
      </div>
    </div>
  ) : null;
};

export default InfoModal;

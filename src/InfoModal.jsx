const InfoModal = ({ show, close }) => {
  return show ? (
    <div className="intro">
      <div className="modal-content">
        {/* <div className="logo right-aligned "> */}
        <h1>CT uncovered</h1>
        <p>A webapp to explore image reconstruction in a CT scanner. <br></br>
        Select angles on the right side with the mouse, and then try to find the corresponding slice on the right
        </p>
        <p>
          You can find a whole animation video on the topic here: <br />
          VIDEO IS COMMING SOON.
        </p>
        <p>
          {" "}
          Concept and implementation: <br /> Jan-Hendrik Müller <br /> <br />
          Design: <br /> MOIN MOTION
        </p>

        <p> This is an Open Source Project, you can find the whole code here:   <a href="https://github.com/kolibril13/ct-uncovered" >https://github.com/kolibril13/ct-uncovered</a> </p>
        <button onClick={close}>Close </button>

      </div>
      {/* </div> */}
    </div>
  ) : null;
};

export default InfoModal;

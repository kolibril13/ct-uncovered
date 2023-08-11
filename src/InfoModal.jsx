const InfoModal = ({ show, close }) => {
  return show ? (
    <div className="intro">
      <div className="modal-content">
        <div className="logo">
          <h1>CT uncovered</h1>
          <p>A webapp to explore image reconstruction in a CT scanner.</p>
          <p>
            {" "}
            Concept and implementation: <br /> Jan-Hendrik Müller{" "}
          </p>
          <p>
            {" "}
            Design: <br /> MOIN MOTION{" "}
          </p>

          <p> TODO: Add here another paragraph with some more infos </p>
          <button onClick={close}>Close </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default InfoModal;

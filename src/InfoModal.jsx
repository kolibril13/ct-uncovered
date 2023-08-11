const InfoModal = ({ show, close }) => {
  return show ? (
    <div className="modal">
      <div className="modal-content">
        <button onClick={close} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1000 }}>Close </button>
        <p>hello world</p>
      </div>
    </div>
  ) : null;
};

export default InfoModal;

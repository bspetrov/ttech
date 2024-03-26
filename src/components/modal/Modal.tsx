import "./modal.css";

interface ModalType {
  src: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ setShowModal, src }: ModalType) => {
  return (
    <>
      <div className="mfp-bg"></div>
      <div className="mfp-container mfp-iframe-holder requires-no-scroll">
        <div className="mfp-content">
          <div className="mfp-iframe-scaler">
            <button
              onClick={() => setShowModal((p) => !p)}
              title="Close (Esc)"
              type="button"
              className="mfp-close"
            >
              ×
            </button>
            <iframe className="mfp-iframe" src={src} allowFullScreen={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

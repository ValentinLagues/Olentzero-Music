import { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [hideModal, setHideModal] = useState(true);

  return (
    <>
      {hideModal && (
        <div className="App-modal" onClick={() => setHideModal(false)}>
          <div className="App-title">
            Olentzero 0 Music <p>The musical advent calendar</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

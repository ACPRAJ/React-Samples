import React from "react";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <br />
      <button onClick={() => setIsModalOpen(true)}>Show Modal Message</button>
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "red",
          },
        }}
      >
        <h2>Modal Header</h2>
        <p>Modal body</p>
        <div>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export { ModalComponent };

//export default ModalComponent;

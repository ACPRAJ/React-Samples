import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function IdleTimerComponent() {
  const idleTimerRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTimerRef = useRef(null);

  const onIdle = () => {
    if (isLoggedIn) {
      setIsModalOpen(true);
      modalTimerRef.current = setInterval(logMeOut, 5 * 1000);
    }
  };

  const keepMeSignedIn = () => {
    setIsModalOpen(false);
    clearInterval(modalTimerRef.current);
  };

  const logMeOut = () => {
    setIsModalOpen(false);
    setIsLoggedIn(false);
    clearInterval(modalTimerRef.current);
  };

  return (
    <div>
      <h1>Idle Timer App</h1>
      {isLoggedIn ? <h2>Hello ACPRAJ</h2> : <h2>Hello Guest</h2>}
      <IdleTimer ref={idleTimerRef} timeout={1000 * 5} onIdle={onIdle} />

      <Modal isOpen={isModalOpen}>
        <h2>You are idle for a while</h2>
        <p>You will be logged out soon</p>
        <br />
        <button onClick={keepMeSignedIn}>Keep me signed in</button>
        <button onClick={logMeOut}>Log me out</button>
      </Modal>
    </div>
  );
}

export default IdleTimerComponent;

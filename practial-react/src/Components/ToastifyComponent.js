import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      <div>This is a custom notification message</div>
      <div>
        <button onClick={closeToast}>close</button>
      </div>
    </div>
  );
};

const showNotification = () => {
  toast("Simple Notification", { position: toast.POSITION.TOP_RIGHT });
  toast.success("Success Message", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 8000,
  });
  toast.info("Info Message", {
    position: toast.POSITION.TOP_LEFT,
    autoClose: false,
  });
  toast.warn("Warn Message", { position: toast.POSITION.BOTTOM_RIGHT });
  toast.error(<CustomToast />, { position: toast.POSITION.BOTTOM_CENTER });
  toast("Simple Notification", { position: toast.POSITION.BOTTOM_LEFT });
};

function ToastifyComponent() {
  return (
    <div>
      <button onClick={showNotification}>show Notification</button>
    </div>
  );
}

export default ToastifyComponent;

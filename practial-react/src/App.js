import React from "react";
import "./App.css";
import IconComponent from "./Components/IconComponent.js";
import ToastifyComponent from "./Components/ToastifyComponent";
import { ModalComponent } from "./Components/ModalComponent";
import CountUpComponent from "./Components/CountUpComponent";

function App() {
  return (
    <div className="App">
      <IconComponent />
      <ToastifyComponent />
      <ModalComponent />
      <CountUpComponent />
    </div>
  );
}

export default App;

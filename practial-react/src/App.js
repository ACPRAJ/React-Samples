import React from "react";
import "./App.css";
import IconComponent from "./Components/IconComponent.js";
import ToastifyComponent from "./Components/ToastifyComponent";
import { ModalComponent } from "./Components/ModalComponent";
import CountUpComponent from "./Components/CountUpComponent";
import IdleTimerComponent from "./Components/IdleTimerComponent";
import ColorPickerComponent from "./Components/ColorPickerComponent";
import CreditCardsComponent from "./Components/CreditCardsComponent";
import DatePickerComponent from "./Components/DatePickerComponent";
import VideoPlayerComponent from "./Components/VideoPlayerComponent";

function App() {
  return (
    <div className="App">
      {/* <IconComponent />
      <ToastifyComponent />
      <ModalComponent />
      <CountUpComponent /> 
      <IdleTimerComponent />*/}
      <ColorPickerComponent />
      <CreditCardsComponent />
      <DatePickerComponent />
      <VideoPlayerComponent />
    </div>
  );
}

export default App;

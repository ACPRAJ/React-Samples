import React from "react";
import "./App.css";
// import HookCounter from "./Components/Use-State/HookCounter";
import IncrementCounter from "./Components/Use-State/IncrementCounter";
import UseStateObject from "./Components/Use-State/UseStateObject";
import UseStateWithArrays from "./Components/Use-State/UseStateWithArrays";

function App() {
  return (
    <div className="App">
      <UseStateWithArrays />
      {/*<UseStateObject />
      <IncrementCounter />
       <HookCounter /> */}
    </div>
  );
}

export default App;

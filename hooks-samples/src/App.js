import React from "react";
import "./App.css";
// import HookCounter from "./Components/Use-State/HookCounter";
import IncrementCounter from "./Components/Use-State/IncrementCounter";
import UseStateObject from "./Components/Use-State/UseStateObject";
import UseStateWithArrays from "./Components/Use-State/UseStateWithArrays";
import HookCounter from "./Components/Use-Effect/HookCounter";
import ConditionalRender from "./Components/Use-Effect/ConditionalRender";
import RenderOnlyOnce from "./Components/Use-Effect/RenderOnlyOnce";
import MouseContainer from "./Components/Use-Effect/MouseContainer";
import HooksPropsDependency from "./Components/Use-Effect/HooksPropsDependency";

function App() {
  return (
    <div className="App">
      <HooksPropsDependency />
      {/*<MouseContainer />
      <RenderOnlyOnce />
      <ConditionalRender />
      <HookCounter />
      <UseStateWithArrays />
      <UseStateObject />
      <IncrementCounter />
       <HookCounter /> */}
    </div>
  );
}

export default App;

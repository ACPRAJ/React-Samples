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
import SimpleDataFetcher from "./Components/Data-Fetching/SimpleDataFetcher";
import FetchOnePost from "./Components/Data-Fetching/FetchOnePost";
import ComponentA from "./Components/Use-Context/ComponentA";
import CounterWithUseReducer from "./Components/Use-Reducer/CounterWithUseReducer";
import CounterWithObjects from "./Components/Use-Reducer/CounterWithObjects";
import MultipleUseReducer from "./Components/Use-Reducer/MultipleUseReducer";
import ComponentA1 from "./Components/Use-Reducer&Use-Context/ComponentA1";
import ComponentD1 from "./Components/Use-Reducer&Use-Context/ComponentD1";
import { useReducer } from "react";

export const UserContext = React.createContext();
export const RoleContext = React.createContext();
export const CountContext = React.createContext();

const initialCount = 0;
const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initialCount;
    default:
      return count;
  }
};

function App() {
  const Person = {
    UserName: "ACPRAJ",
    Sex: "Male"
  };

  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, dispatchFn: dispatch }}
      >
        <div>Count: {count}</div>
        <ComponentA1 />
        <ComponentD1 />
      </CountContext.Provider>

      {/* <MultipleUseReducer /> */}
      {/* <CounterWithObjects /> */}
      {/* <CounterWithUseReducer /> */}

      {/* <UserContext.Provider value={Person}>
        <RoleContext.Provider value={"Admin"}>
          <ComponentA />
        </RoleContext.Provider>
      </UserContext.Provider> */}

      {/*<FetchOnePost />
      <SimpleDataFetcher />
      <HooksPropsDependency />
      <MouseContainer />
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

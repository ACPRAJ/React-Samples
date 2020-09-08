import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Components/Reducer/Store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import HooksIceCreamContainer from "./Components/HooksIceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <HooksCakeContainer />
        <CakeContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;

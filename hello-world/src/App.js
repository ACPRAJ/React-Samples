import React, { Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
// import Greetings from './Components/Greet'
import { Vanakkam } from "./Components/Greet";
import Welcome from "./Components/WelcomeClass";
// import Message from './Components/Message'
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import GreetUser from "./Components/GreetUser";
import PersonList from "./Components/PersonList";
import CssStyles from "./Components/CssStyles";
import InlineStyle from "./Components/InlineStyle";
import "./Styles/AppStyles.css";
import Styles from "./Styles/AppStyles.module.css";
import Form from "./Components/Form";
import LifeCycleParent from "./Components/LifeCycle/LifeCycleParent";
import Fragments from "./Components/Fragments/Fragment";
import Table from "./Components/Fragments/Table";
import PureComponent from "./Components/PureComponents/PureComp";
import ParentComp from "./Components/PureComponents/ParentComp";
import RefsDemo from "./Components/Refs/RefsDemo";
import ParentText from "./Components/Refs/ParentText";
import ParentFRInput from "./Components/Refs/ParentFRInput";
import Hero from "./Components/ErrorBoundary/Hero";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import ClickCounter from "./Components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./Components/HigherOrderComponents/HoverCounter";
import ClickCounter2 from "./Components/PropsRender/ClickCounter2";
import WithCounter2 from "./Components/PropsRender/WithCounter2";
import HoverCounter2 from "./Components/PropsRender/HoverCounter2";

function App() {
  return (
    <div className="App">
      <WithCounter2 incrementStep="2">
        {(count, fnIncrementCount) => (
          <ClickCounter2 count={count} fnIncrementCount={fnIncrementCount} />
        )}
      </WithCounter2>

      <WithCounter2 incrementStep="10">
        {(count, fnIncrementCount) => (
          <HoverCounter2 count={count} fnIncrementCount={fnIncrementCount} />
        )}
      </WithCounter2>
      {/*<ClickCounter name="ACPRAJ" />
      <HoverCounter />
      <ErrorBoundary>
        <Hero heroName="Spider Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Super Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ParentFRInput />
      <ParentText />
      <RefsDemo />
      <ParentComp />
      <Fragments/>
      <Table/>
      <LifeCycleParent/>
      <Form/>
      <CssStyles enableStyle={true}/>
      <InlineStyle/>
      <h3 className="error">Error</h3>
      <h3 className={Styles.success}>Success</h3>
      <PersonList/>
      <GreetUser/>
      <ParentComponent/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <Vanakkam name="ACPRAJ" spouse="Niveda"></Vanakkam>
      <Welcome name="Niveda" spouse="Pradheep">
        <p>This text is italicised</p>
      </Welcome>
      <Counter/>
      <Message></Message>
      <Greetings/>
      
      <Vanakkam name="பிரதீப் ராஜ்"> 
        <button>Press Here</button>
      </Vanakkam> */}
    </div>
  );
}

export default App;

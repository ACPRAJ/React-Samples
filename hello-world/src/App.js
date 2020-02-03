import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greetings from './Components/Greet'
import { Vanakkam } from './Components/Greet'
import Welcome from './Components/WelcomeClass'
// import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import GreetUser from './Components/GreetUser'
import PersonList from './Components/PersonList';
import CssStyles from './Components/CssStyles'
import InlineStyle from './Components/InlineStyle';
import "./Styles/AppStyles.css"
import Styles from "./Styles/AppStyles.module.css"
import Form from "./Components/Form"

function App() {
  return (
    <div className="App">
      <Form/>
      {/*<CssStyles enableStyle={true}/>
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

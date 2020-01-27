import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greetings from './Components/Greet'
import { Vanakkam } from './Components/Greet'
import Welcome from './Components/WelcomeClass'
// import Message from './Components/Message'
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      <Vanakkam name="ACPRAJ" spouse="Niveda"></Vanakkam>
      <Welcome name="Niveda" spouse="Pradheep">
        <p>This text is italicised</p>
      </Welcome>
      {/* <Counter/>
      <Message></Message>
      <Greetings/>
      
      <Vanakkam name="பிரதீப் ராஜ்"> 
        <button>Press Here</button>
      </Vanakkam> */}
    </div>
  );
}

export default App;

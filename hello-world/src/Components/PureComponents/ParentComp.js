import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ACP"
    };
    var intervalHandle = "";
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.endTimer();
  }

  startTimer() {
    this.intervalHandle = setInterval(() => {
      this.setState({
        name: "ACP"
      });
    }, 2000);
  }

  endTimer() {
    clearInterval(this.intervalHandle);
  }

  onEndTimerClicked = () => {
    this.endTimer();
  };

  onStartTimerClicked = () => {
    this.startTimer();
  };

  render() {
    console.log(
      `********************** Parent Comp Rendered ******************`
    );
    return (
      <div>
        <div>Parent Component {this.state.name}</div>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <button onClick={this.onEndTimerClicked}>End Timer</button>
        <button onClick={this.onStartTimerClicked}>Start Timer</button>
      </div>
    );
  }
}

export default ParentComp;

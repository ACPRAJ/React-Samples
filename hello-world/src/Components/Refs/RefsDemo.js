import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    //this is callback ref - which is an old way of referencing.
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //this.inputRef.current.focus();
    this.cbRef.focus();
  }

  onReadInputClicked = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <input ref={this.setCbRef} />
        <button onClick={this.onReadInputClicked}>Read Input</button>
      </div>
    );
  }
}

export default RefsDemo;

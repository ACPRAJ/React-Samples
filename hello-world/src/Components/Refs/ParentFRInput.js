import React, { Component } from "react";
import FRInput from "./FRInput";

class ParentFRInput extends Component {
  constructor(props) {
    super(props);

    this.refChild = React.createRef();
  }

  onButtonClicked = () => {
    this.refChild.current.focus();
  };

  render() {
    return (
      <div>
        <FRInput ref={this.refChild} />
        <button onClick={this.onButtonClicked}>Focus on Child Text</button>
      </div>
    );
  }
}

export default ParentFRInput;

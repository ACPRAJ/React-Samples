import React, { Component } from "react";
import ChildText from "./ChildText";

class ParentText extends Component {
  constructor(props) {
    super(props);

    this.refChildText = React.createRef();
  }

  onButtonClicked = () => {
    this.refChildText.current.FocusInput();
  };

  render() {
    return (
      <div>
        <ChildText ref={this.refChildText} />
        <button onClick={this.onButtonClicked}>Focus on child text</button>
      </div>
    );
  }
}

export default ParentText;

import React, { Component } from "react";

class ChildText extends Component {
  constructor(props) {
    super(props);

    this.refInput = React.createRef();
  }

  FocusInput() {
    this.refInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.refInput} />
      </div>
    );
  }
}

export default ChildText;

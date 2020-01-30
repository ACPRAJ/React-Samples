import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello User!"
      };
      //this.onButtonClicked = this.onButtonClicked.bind(this);
    };

    // onButtonClicked() {
    //     this.setState({
    //         message: "Good bye user!"
    //     })
    // }

    onButtonClicked = () => {
        this.setState({
            message: "Good bye user!"
        })
    }
    
  render() {
    return (
      <div> 
          <div>{ this.state.message }</div>
          {/* <button onClick = { this.onButtonClicked.bind(this) }> Say Goodbye</button> */}
          {/* <button onClick = { () => this.onButtonClicked() }> Say Goodbye</button> */}
          <button onClick = { () => this.onButtonClicked() }> Say Goodbye</button>
      </div>
    );
  }
}

export default EventBind;

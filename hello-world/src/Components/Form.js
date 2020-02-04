import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react"
    };

    this.refTopic = React.createRef();
  }

  onUsernameChanged = event => {
    this.setState({
      username: event.target.value
    });
  };

  onCommentsChanged = event => {
    this.setState({
      comments: event.target.value
    });
  };

  onTopicChanged = event => {
    console.log(event);
    this.setState({
      topic: event.target.value
    });
  };

  onFormSubmit = event => {
    alert(`You have selected username: ${this.state.username}, comments: ${this.state.comments}
        and topic as ${this.refTopic.current.selectedOptions[0].text} with the id ${this.state.topic}`);
    console.log(this.refTopic);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form id="frmForm" onSubmit={this.onFormSubmit}>
        <div>
          <label> Username: </label>
          <input
            type="text"
            value={username}
            onChange={this.onUsernameChanged}
          />
        </div>
        <div>
          <label> Comments: </label>
          <textarea
            type="textArea"
            value={comments}
            onChange={this.onCommentsChanged}
          />
        </div>
        <div>
          <label> Topic: </label>
          <select
            ref={this.refTopic}
            id="cmbTopic"
            value={topic}
            onChange={this.onTopicChanged}
          >
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="vue">Vue </option>
          </select>
        </div>
        <div>
          <button type="Submit"> Submit </button>
        </div>
      </form>
    );
  }
}

export default Form;

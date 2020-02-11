import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  OnChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(exception => {
        console.log(exception);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label name="lblUser">User Id: </label>
            <input
              type="text"
              name="userId"
              onChange={this.OnChangeHandler}
              value={userId}
            />
          </div>
          <div>
            <label name="lblTitle">Title: </label>
            <input
              type="text"
              name="title"
              onChange={this.OnChangeHandler}
              value={title}
            />
          </div>
          <div>
            <label name="lblBody">Body: </label>
            <input
              type="text"
              name="body"
              onChange={this.OnChangeHandler}
              value={body}
            />
          </div>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    );
  }
}

export default PostForm;

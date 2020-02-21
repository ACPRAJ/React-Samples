import React, { Component } from "react";
import MainPage from "./MainPage";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    };
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onLoginButtonClicked = () => {
    const { username, password } = this.state;

    if (username == "acp" && password == "acp") {
      this.setState({
        isLoggedIn: true
      });
      console.log(this.props.history);
      return;
    }

    alert("Invalid User Credentials");
  };

  onResetButtonClicked = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  componentDidMount() {
    this.setState({
      username: "acp",
      password: "acp"
    });
  }

  render() {
    if (this.state.isLoggedIn) return <MainPage />;
    else
      return (
        <div className="login-div">
          <form>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={this.onChangeHandler}
                value={this.state.username}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={this.onChangeHandler}
                value={this.state.password}
              />
            </div>
            <div className="login-buttons-div">
              <button
                className="btn btn-info btn-curved"
                onClick={this.onLoginButtonClicked}
              >
                Login
              </button>
              <button
                className="btn btn-info btn-curved"
                onClick={this.onResetButtonClicked}
              >
                Reset
              </button>
            </div>
          </form>
          <label>{JSON.stringify(this.state)}</label>
        </div>
      );
  }
}

export default Login;

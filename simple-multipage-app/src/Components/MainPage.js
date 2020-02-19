import React, { Component } from "react";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  onLogoutClicked = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  Alert = () => {
    alert("Logout Button Clicked")
  }

  render() {
    if (this.state.isLoggedIn)
      return (
        <div className="card" >
          <div className="card-header">
            <div>
              <h1 >Header Text</h1>
              {/* <label className="card-title">Header Text</label> */}
              <a href="#" className="btn btn-sm btn-info btn-curved logout-button"
                onClick={this.Alert}>Logout</a>
            </div>
          </div>

          <div className="card-body">
            <div>This is Main Page</div>
            <button onClick={this.onLogoutClicked} className="Logout-button">
              Logout
            </button>
          </div>

          <div className="card-footer footer-div" >
            Footer text
          </div>
        </div >
      );
    else return <Login />;
  }
}

export default MainPage;

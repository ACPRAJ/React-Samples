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

  render() {
    if (this.state.isLoggedIn)
      return (
        <div>
          <Header />
          <div>This is Main Page</div>
          <button onClick={this.onLogoutClicked} className="Logout-button">
            Logout
          </button>
          <Footer />
        </div>
      );
    else return <Login />;
  }
}

export default MainPage;

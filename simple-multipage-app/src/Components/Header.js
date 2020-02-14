import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <center>Center tag</center>
        <h1>Home Page</h1>
        <button className="Logout-button">Logout</button>
      </div>
    );
  }
}

export default Header;

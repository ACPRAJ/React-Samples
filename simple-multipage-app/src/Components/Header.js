import React, { Component } from "react";
// import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="header-div">
        <h2 className="header-text">Header Text</h2>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    );
  }
}

export default Header;

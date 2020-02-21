import React, { Component } from "react";
// import "../App.css";

class Header extends Component {
  render() {
    const { fnOnLogoutClicked } = this.props
    return (
      <div className="header-div">
        <h2 className="header-text">Header Text</h2>
        <button type="button" className="logout-button" onClick={fnOnLogoutClicked}>
          Logout
        </button>
      </div>
    );
  }
}


export default Header;

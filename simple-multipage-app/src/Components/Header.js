import React, { Component } from "react";
// import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1>Sample App</h1>
        <div className="col-sm-9">
          <label>Test</label>
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary" >Logout</button>
        </div>
      </div>


      // <div className="Header">
      //   <h1>Header Section</h1>
      //   <button className="Logout-button">Logout</button>
      // </div>
    );
  }
}

export default Header;

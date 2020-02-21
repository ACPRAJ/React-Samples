import React, { Component } from "react";
import { Link } from "react-router-dom";

export class LeftPanel extends Component {
  render() {
    return (
      <div className="left-panel-div">
        <ul>
          <Link to="/ChildPage1">
            <li className="panel-items">
              <button className="btn btn-info btn-sm">Page 1</button>
            </li>
          </Link>
          <Link to="/ChildPage2">
            <li className="panel-items">
              <button className="btn btn-info btn-sm">Page 2</button>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default LeftPanel;

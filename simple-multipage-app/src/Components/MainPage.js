import React, { Component } from "react";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import ChildPage1 from "./ChildPage1";
import ChildPage2 from "./ChildPage2";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
          <Header fnOnLogoutClicked={this.onLogoutClicked} />

          <div className="left-panel-div">
            <ul>
              <li className="panel-items">
                <a href="/ChildPage1" className="btn btn-info btn-sm">Page 1</a>
              </li>
              <li className="panel-items">
                <a href="/ChildPage2" className="btn btn-info btn-sm">Page 2</a>
              </li>
            </ul>
          </div>

          <div className="content-area">
            <label>{JSON.stringify(this.state)}</label>
            <Router>
              <Switch>
                <Route path="/" exact component={ChildPage1} />
                <Route path="/ChildPage1" component={ChildPage1} />
                <Route path="/ChildPage2" component={ChildPage2} />
              </Switch>
            </Router>
          </div>

          <Footer />
        </div>

        // <div className="card">
        //   <div className="card-header">
        //     <div>
        //       <h1>Header Text</h1>
        //       {/* <label className="card-title">Header Text</label> */}
        //       <a
        //         href="#"
        //         className="btn btn-sm btn-info btn-curved logout-button"
        //         onClick={this.onLogoutClicked}
        //       >
        //         Logout
        //       </a>
        //     </div>
        //   </div>

        //   <div className="left-panel">
        //     <div className="card-body">
        //       <h5 className="card-title">Card title</h5>
        //       <p className="card-text">
        //         With supporting text below as a natural lead-in to additional
        //         content.
        //       </p>
        //       <a href="#" className="btn btn-primary">
        //         Button
        //       </a>
        //     </div>
        //   </div>

        //   <div className="card-body">
        //     <p className="card-text">This is Main Page</p>
        //   </div>

        //   <div className="card-footer footer-div text-center">
        //     This site is powered by "ACPRAJ"
        //   </div>
        // </div>
      );
    else return <Login />;
  }
}

export default MainPage;

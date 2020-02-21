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

          <div className="left-panel-div">
            <ul>
              <li className="panel-items">
                <a href="#">Link 1</a>
              </li>
              <li className="panel-items">
                <a href="#">Link 2</a>
              </li>
            </ul>
          </div>

          <div className="content-area">
            <div className="card-body">
              <h3 className="card-title text-center">Content Area</h3>
              <h4 className="card-text text-center">Link 1</h4>
            </div>
          </div>
          {/*  */}

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

import React, { Component } from "react";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import ChildPage1 from "./ChildPage1";
import ChildPage2 from "./ChildPage2";
import LeftPanel from "./LeftPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

          <Router>
            <LeftPanel />
            <div className="content-area">
              <Switch>
                <Route path="/" exact component={ChildPage1} />
                <Route path="/ChildPage1" component={ChildPage1} />
                <Route path="/ChildPage2" component={ChildPage2} />
              </Switch>
            </div>
          </Router>

          <Footer />
        </div>
      );
    else return <Login />;
  }
}

export default MainPage;

import React from "react";
import Header from "./global/Header";
import Footer from "./global/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  // Research state managment components
  render() {
    return (
      <Router>
        <div className="app">
          <div className="appContainer">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <div>
                    <div className="center"></div>
                  </div>
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/balance"
              render={(props) => (
                <React.Fragment>
                  <BalanceManagement />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/account"
              render={(props) => (
                <React.Fragment>
                  <AccountDetails />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/topup"
              render={(props) => (
                <React.Fragment>
                  <Topup />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

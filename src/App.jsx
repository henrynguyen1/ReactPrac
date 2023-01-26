import React from "react";
import Header from "./global/Header";
import Footer from "./global/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
                  
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/kingdom"
              render={(props) => (
                <React.Fragment>
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/republic"
              render={(props) => (
                <React.Fragment>
                 
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/imperial"
              render={(props) => (
                <React.Fragment>
                 
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/byzantine"
              render={(props) => (
                <React.Fragment>
                  
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/store"
              render={(props) => (
                <React.Fragment>
                  
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <React.Fragment>
                  
                </React.Fragment>
              )}
            />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}
export default App;

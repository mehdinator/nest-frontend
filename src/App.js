import React, { Component } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Route } from "react-router-dom";
import { Footer } from "react-materialize";
import NestDashboard from "./pages/NestDashboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/auth/nest" component={LandingPage} />
        <Footer
          copyrights="Copyright © 2019 Alteos GmbH"
          className=" #ffb74d orange lighten-2"
        />
      </div>
    );
  }
}

export default App;

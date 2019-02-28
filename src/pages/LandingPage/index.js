import React, { Component } from "react";
import { Button } from "react-materialize";
import { Link, withRouter, Route } from "react-router-dom";
import api from "../../api";
import Cookies from "js-cookie";
class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null
    };
  }

  getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    console.log("Query variable %s not found", variable);
  }

  componentDidMount() {
    let code = this.getQueryVariable("code");
    if (this.props.location.pathname === "/auth/nest/callback") {
      api.callback(code).then(response => {
        this.setState({ response: response });
      });
    }
  }

  handleLogin = () => {
    window.location = "http://localhost:4000/auth/nest";
    return null;
  };

  render() {
    console.log(this.props.location.pathname === "/auth/nest/callback");

    if (this.state.response) {
      return <div>Loading</div>;
    }
    return (
      <div id="landing-page">
        <div className="camera">
          <img src="/nest-camera.png" alt="nest" />
        </div>

        <div className="info">
          <h1>Nest Protection - Alteos Coverage</h1>

          <Button
            className="#ffb74d orange lighten-2"
            onClick={this.handleLogin}
          >
            Click here to get started
          </Button>

          <div className="axa">
            <h5>Insurance powered by</h5>
            <img src="/axa-logo.svg" alt="axa" />
          </div>
        </div>
        <div className="alteos">
          <img src="/alteos.jpg" alt="alteos" />
        </div>

        <Route
          path="/privacy-policy"
          component={() => {
            window.location = "http://localhost:4000/auth/nest";
            return null;
          }}
        />
      </div>
    );
  }
}

export default withRouter(LandingPage);

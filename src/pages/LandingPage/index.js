import React, { Component } from "react";
import { Button } from "react-materialize";
import { Link, withRouter, Redirect } from "react-router-dom";
import api from "../../api";
class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ""
    };
  }

  handleLogin() {
    api.login().then(response => {
      return;
    });
  }
  render() {
    console.log(this.props);
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
      </div>
    );
  }
}

export default withRouter(LandingPage);

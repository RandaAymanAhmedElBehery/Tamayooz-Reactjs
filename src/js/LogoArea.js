import React, { Component } from 'react';

class LogoArea extends Component {
  render() {
    return (
        <div className="logoArea" id="headerLogoArea">
          <img src={require("./../images/logo.png")} className="logo" id="logo" />
        </div>
    );
  }
}

export default LogoArea;

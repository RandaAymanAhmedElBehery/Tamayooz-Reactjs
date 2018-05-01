import React, { Component } from 'react';
//import './../css/profile.css';

class LogoArea extends Component {
  render() {
    return (
        <div className="logoArea" id="headerLogoArea">
          <img src={require("./../images/logo.png")} className="logo" />
        </div>
    );
  }
}

export default LogoArea;

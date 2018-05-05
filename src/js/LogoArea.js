import React, { Component } from 'react';
import './../css/header.css';

class LogoArea extends Component {
  /**
  * AUTHOR: RANDA AYMAN ELBEHERY
  * ID : 20140124
  * THIS CLASS IS RESPONSIBLE FOR THE RECTANGLE THAT CONTAINS THE LOGO IN THE HEADER
  */
  
  render() {
    return (
      <div className="logoArea" id={this.props.id}>
        <img src={require("./../images/logo.png")} className="logo" />
      </div>
    );
  }
}

export default LogoArea;

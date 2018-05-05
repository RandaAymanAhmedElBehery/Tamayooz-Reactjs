import React, { Component } from 'react';
import './../css/header.css';

class NavBar extends Component {

  /**
    * AUTHOR: RANDA AYMAN ELBEHERY
    * ID : 20140124
    * THIS CLASS IS RESPONSIBLE FOR THE NAV BAR IN THE HEADER,
    * IT RENDERS THE NAVBAR BASED ON THE ITEMS PASSED TO BE PLACED IN THE MENU
    */
   
  render() {

    return (
      <div id="nav">
        <ul>
          <a href="#"><li>{this.props.opt1}</li></a>
          <a href="#"><li>{this.props.opt2}</li></a>
          <a href="#"><li>{this.props.opt3}</li></a>
          <a href="#"><li>{this.props.opt4}</li></a>
        </ul>

        <button><img id="btnIcon" src={require("./../images/btn icon.png")} />للإعلان عن رقمك لدينا</button>

      </div>

    );
  }
}

export default NavBar;

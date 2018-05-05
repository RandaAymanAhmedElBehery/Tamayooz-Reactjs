import React from 'react';
import LogoArea from './LogoArea';
import NavBar from './NavBar';

export default () => (
  /**
     * AUTHOR: RANDA AYMAN ELBEHERY
     * ID : 20140124
     * THIS CLASS IS RESPONSIBLE FOR THE HEADER OF THE WEBSITE PAGES,
     * IT SHOWS THE HEADER WHICH CONTAINS THE LOGO AND THE NAVBAR
     */

  <header>
    <img src={require("./../images/header2.png")} id="headerBg" />
    <LogoArea id="headerLogoArea" />
    <NavBar opt1="للإعلان عن رقمك" opt2="المدونة" opt3="المتجر" opt4="الرئيسية" />
    <hr id="headerLine" />
  </header>

);
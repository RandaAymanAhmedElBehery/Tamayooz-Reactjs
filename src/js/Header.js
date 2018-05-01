import React from 'react';
import LogoArea from './LogoArea';
import NavBar from './NavBar';

export default()=>(
  <header>
    <img src={require("./../images/header2.png")} id="headerBg"/>
    <LogoArea/>
    <NavBar opt1="للإعلان عن رقمك" opt2="المدونة" opt3="المتجر" opt4="الرئيسية"/>
  </header>

);
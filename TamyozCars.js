import React, { Component } from 'react';
import Projects from '../css/Projects.css';
import CarsNumbers from './CarsNumbers';
import Bronze from './Bronze';
import Bronze2 from './Bronze2';
import CarPhoneNumbers from './CarPhoneNumbers';
import Line from './Line';
import PlusNumbers from './PlusNumbers';
import Slider from './Slider';

class TamyozCars extends Component {
  render() {
    return (
      <div className="App">
        <Slider src={require('../images/Layer 3.png')} />
        <CarPhoneNumbers pr="الرئيسية > أرقام السيارات"  pl="الأنتقال لأرقام الجوال"/>
        <CarsNumbers/>
        <Bronze src={require('./images/Vector Smart Object2.png')}/>
        <Line/>
        <Bronze2 src={require('./images/Vector Smart Object2.png')}/>
        <Line/>
        <Bronze2 Bronze1="b" p="price1" c="CategoryName1" br="bronze_footer1" l="link1" i="image-cards1" src={require('../images/Vector Smart Object2.png')}/>
        <Line/>
        <PlusNumbers/>
        <Line/>
      </div>
    );
  }
}

export default TamyozCars;

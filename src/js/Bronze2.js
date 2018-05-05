import React, { Component } from 'react';
import './../css/TamyozCars.css';
var cl1="image image-cards";

class Bronze2 extends Component {
  render() {
    return (

      <div className="Bronze" id={this.props.b}>
        <div className="container">
          <div className  ="price" id={this.props.p}>
              السعر الحالي
              <br/> 1000 ريال
          </div>
          <div id={this.props.i}>
            <img className="image" src={this.props.src}/>
            <p className="image-cards">{this.props.image_cards}</p>
          </div>
          <div className="carCategoryName" id={this.props.c}>برونزي</div>
          <div className="bronze_footer" id={this.props.br}>
            <table id="table1">
              <tr>
                <td styles={{width: '240px'}}>
                  <div className="link" id={this.props.l}>
                    <a href="#"> للمزايدة  </a>
                  </div>
                </td>
                <td className="wideCell" style={{width: '980px'}}>يتم تسليم الأوراق خلال 6 ايام تطبق رسوم ادارية 500 درهم يتحمل المشتري رسوم نقل الملكية 120 درهم.</td>
              </tr>

            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Bronze2;

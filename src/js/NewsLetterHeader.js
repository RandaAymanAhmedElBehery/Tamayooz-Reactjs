import React , {Component} from 'react';
import  LogoArea from "./../js/LogoArea";
import './../css/newsletter.css';

//specific header to Newsletter page as its header is diffrent from the other headers

class NewsLetterHeader extends Component{
	render(){
		return ( 
			//outer div for the logo and Tamayooz image
		<div className="div">
		//refrence to Logo component
        <LogoArea id="logoArea" />
		<img  id="img1" src={require("./../images/Vector Smart Object11.png")} />

		<p className="thanks">
			شكرًا لإختياركم
		</p>
		<p className="thanks" id="t">
			تميز
		</p>

	</div> 
	);

	}
}
export default NewsLetterHeader;
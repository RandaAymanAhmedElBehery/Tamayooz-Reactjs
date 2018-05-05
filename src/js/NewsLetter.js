import React, { Component } from 'react';
import NewsLetterHeader from "./../js/NewsLetterHeader";
import NewsLetterParagraph from "./../js/NewsLetterParagraph";
import NewsLetterFoter from "./../js/NewsLetterFoter";
import './../css/newsletter.css';

//component that collect the header and foter and inner paragraph in one page 
class NewsLetter extends Component {
  render() {
    return (
    	<div>
 		<NewsLetterHeader/>
 		<NewsLetterParagraph/>
 		<NewsLetterFoter/>
 		</div>
    );	
  }
}

export default NewsLetter;

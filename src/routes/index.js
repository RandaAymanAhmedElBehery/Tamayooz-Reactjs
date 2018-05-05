import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import NewsLetter from './../js/NewsLetter';
import NewsLetterHeader from './../js/NewsLetterHeader'
import profile from './../js/profile';

export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/NewsLetter" component ={NewsLetter}/>
				<Route path="/profile" component={profile}/>
			</div>
		</BrowserRouter>
);
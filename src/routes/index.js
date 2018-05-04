import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import profile from './../js/profile';
import NewsLetter from './../js/NewsLetter';
import NewsLetterHeader from './../js/NewsLetterHeader'

export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/NewsLetter" component ={NewsLetter}/>
				<Route path="/profile" component={profile}/>
			</div>
		</BrowserRouter>
);
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import profile from './../js/profile';
import NewsLetter from './../js/NewsLetter';
import AddBlog from './../js/AddBlog';
export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/NewsLetter" component ={NewsLetter}/>
				<Route path="/profile" component={profile}/>
				<Route path="/AddBlog" component={AddBlog}/>
			</div>
		</BrowserRouter>
);
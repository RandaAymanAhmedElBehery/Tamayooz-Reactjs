import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import profile from './../js/profile';

export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/profile" component ={profile}/>
			</div>
		</BrowserRouter>
);
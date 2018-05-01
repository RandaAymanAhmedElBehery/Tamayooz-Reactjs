import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import App from'./../App';
import Header from './../js/Header';
import LogoArea from '../js/LogoArea';

export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/profile" component ={Header}/>
			</div>
		</BrowserRouter>
);
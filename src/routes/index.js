import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import NewsLetter from './../js/NewsLetter';
import profile from './../js/profile';
import TamayozCards from './../js/TamyozCards';
import TamayozCars from './../js/TamyozCars';

export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/newsLetter" component ={NewsLetter}/>
				<Route path="/profile" component={profile}/>
				<Route path="/tamayozCards" component={TamayozCards}/>
				<Route path="/tamayozCars" component={TamayozCars}/>
			</div>
		</BrowserRouter>
);
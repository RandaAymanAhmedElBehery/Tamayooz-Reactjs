import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import NewsLetter from './../js/NewsLetter';
import profile from './../js/profile';
import TamayozCards from './../js/TamyozCards';
import TamayozCars from './../js/TamyozCars';

import AddBlog from './../js/AddBlog';
import AddCarNumber from './../js/AddCarNumber';
import AddPhone from './../js/AddPhone';
import AddUser from './../js/AddUser';

import UpdateBlog from './../js/UpdateBlog';
import UpdateCarNumber from './../js/UpdateCarNumber';
import UpdatePhone from './../js/UpdatePhone';
import UpdateUser from './../js/UpdateUser';

import DeleteBlog from './../js/DeleteBlog';
import DeleteCarNumber from './../js/DeleteCarNumber';
import DeletePhone from './../js/DeletePhone';
import DeleteUser from './../js/DeleteUser';


export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/newsLetter" component ={NewsLetter}/>
				<Route path="/profile" component={profile}/>
				<Route path="/tamayozCards" component={TamayozCards}/>
				<Route path="/tamayozCars" component={TamayozCars}/>
				<Route path="/addBlog" component={AddBlog}/>
				<Route path="/addCarNumber" component={AddCarNumber}/>
				<Route path="/addPhone" component={AddPhone}/>
				<Route path="/addUser" component={AddUser}/>
				<Route path="/updateBlog" component={UpdateBlog}/>
				<Route path="/updateCarNumber" component={UpdateCarNumber}/>
				<Route path="/updatePhone" component={UpdatePhone}/>
				<Route path="/updateUser" component={UpdateUser}/>
				<Route path="/deleteBlog" component={DeleteBlog}/>
				<Route path="/deleteCarNumber" component={DeleteCarNumber}/>
				<Route path="/deletePhone" component={DeletePhone}/>
				<Route path="/deleteUser" component={DeleteUser}/>
				

			</div>
		</BrowserRouter>
);
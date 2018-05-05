import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import NewsLetter from './../js/NewsLetter';
<<<<<<< HEAD
import AddBlog from './../js/AddBlog';
=======
import profile from './../js/profile';
<<<<<<< HEAD
import into from './../js/into';
import blogDetails from './../js/blogDetails';

=======
import TamayozCards from './../js/TamyozCards';
import TamayozCars from './../js/TamyozCars';
>>>>>>> 470b829d1f3d11209b0a1349d7c695706e02e851

>>>>>>> 4b49be750d7c19eae964161043da01764fb4829f
export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/newsLetter" component ={NewsLetter}/>
				<Route path="/profile" component={profile}/>
<<<<<<< HEAD
				<Route path="/into" component={into}/>
				<Route path="/blogDetails" component={blogDetails}/>
=======
<<<<<<< HEAD
				<Route path="/AddBlog" component={AddBlog}/>
=======
				<Route path="/tamayozCards" component={TamayozCards}/>
				<Route path="/tamayozCars" component={TamayozCars}/>
>>>>>>> 4b49be750d7c19eae964161043da01764fb4829f
>>>>>>> 470b829d1f3d11209b0a1349d7c695706e02e851
			</div>
		</BrowserRouter>
);
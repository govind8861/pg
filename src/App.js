import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Master from './components/Master'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/auth/Login'
import Property from './components/Property'
import Register from './components/auth/Register'
import PropertySingle from './components/PropertySingle'
import AddCategory from './components/AddCategory'
import UpdateCategory from './components/UpdateCategory'
import ManageCategory from './components/ManageCategory'
import AddCity from './components/AddCity'
import UpdateCity from './components/UpdateCity'
import Feedback from './components/Feedback'
import ManageCity from './components/ManageCity'
import Booking from './components/Booking'
import ViewContact from './components/VIewContact'
import City from './components/City'
import Dashboard from './components/Dashboard'
import ViewFeedback from './components/ViewFeedback'
import AddRoom from './components/AddRoom'
import ManageRoom from './components/ManageRoom'
// import Search from './components/Search';
import BookingRequest from './components/BookingRequest'
import UpdateRoom from './components/UpdateRoom'
import UserProfile from './components/UserProfile'
import ForgotPAssword from './components/ForgotPassword'
import OffcanvasExample from './components/Search'
import Jalandhar from './components/Pages/Jalandhar'
import ResultPage from './components/Pages/ResultPage'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Master />}>
						<Route path="/" element={<Home />}></Route>
						<Route path="/Contact" element={<Contact />}></Route>
						<Route path="/bookingrequest" element={<BookingRequest />}></Route>
						<Route path="/viewContact" element={<ViewContact />}></Route>
						<Route path="/Home" element={<Home />}></Route>
						<Route path="/City" element={<City />}></Route>
						<Route path="/About" element={<About />}></Route>
						<Route path="/Login" element={<Login />}></Route>
						<Route path="/Register" element={<Register />}></Route>
						<Route path="/Property" element={<Property />}></Route>
						<Route path="/PropertySingle" element={<PropertySingle />}></Route>
						<Route path="/Addcategory" element={<AddCategory />}></Route>
						<Route
							path="/Updatecategory/:id"
							element={<UpdateCategory />}
						></Route>
						<Route path="/updateroom/:id" element={<UpdateRoom />}></Route>
						<Route path="/updatecity/:id" element={<UpdateCity />}></Route>
						<Route path="/managecategory" element={<ManageCategory />}></Route>
						<Route path="/addcity" element={<AddCity />}></Route>
						<Route path="/addroom" element={<AddRoom />}></Route>
						<Route path="/manageroom" element={<ManageRoom />}></Route>
						<Route path="/managecity" element={<ManageCity />}></Route>
						<Route path="/feedback" element={<Feedback />}></Route>
						<Route path="/booking" element={<Booking />}></Route>
						<Route path="/dashboard" element={<Dashboard />}></Route>
						<Route path="/viewfeedback" element={<ViewFeedback />}></Route>
						<Route path="/user" element={<UserProfile />}></Route>
						<Route path="/forgot" element={<ForgotPAssword />}></Route>
						<Route path="/results/:id" element={<ResultPage />} exact></Route>
					</Route>
					<Route path="/search" element={<OffcanvasExample />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
// import {
// 	Route,
// 	RouterProvider,
// 	createBrowserRouter,
// 	createRoutesFromElements,
// } from 'react-router-dom'
// import BaseLayout from './components/BaseLayout'
// import { routes } from './routes'
// import './App.css'

// function App() {
// 	const router = createBrowserRouter(
// 		createRoutesFromElements(
// 			<Route path="/" element={<BaseLayout />}>
// 				{routes}
// 			</Route>,
// 		),
// 	)

// 	return <RouterProvider router={router} />
// }

// export default App

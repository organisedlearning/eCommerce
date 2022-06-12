import React from "react";
import Dashboard from "./component/pages/Dashboard";
import LogIn from "./component/pages/LogIn";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import CartDetails from "./component/pages/CartDetails";
import CheckOut from "./component/pages/CheckOut";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Dashboard />}></Route>
			<Route exact path="/login" element={<LogIn />}></Route>
			<Route exact path="/cart" element={<CartDetails />}></Route>
			<Route exact path="checkout" element={<CheckOut />}></Route>
			{/* <Route exact path="/contact" Component={<Contact />}></Route> */}
		</Routes>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import Signup from "./Pages/Authentication/Signup/Signup";
import SocialLogin from "./Pages/Authentication/SocialLogin/SocialLogin";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Tools/Purchase/Purchase";
import Profile from "./Pages/Profile/Profile";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";
import Page404 from "./Pages/SharedPages/Page404";

function App() {
	return (
		<div className="App">
			<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/socialLogin" element={<SocialLogin />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
		</div>
    
	);
}

export default App;

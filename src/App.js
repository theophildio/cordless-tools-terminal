import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Signup from "./Pages/Authentication/Signup/Signup";
import SocialLogin from "./Pages/Authentication/SocialLogin/SocialLogin";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase/Purchase";
import Tools from "./Pages/Home/Tools/Tools";
import Profile from "./Pages/Profile/Profile";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";
import Page404 from "./Pages/SharedPages/Page404";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="App">
			<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/purchase/:id" element={
          <RequireAuth>
          <Purchase />
        </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/socialLogin" element={<SocialLogin />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
      <ToastContainer />
		</div>
    
	);
}

export default App;

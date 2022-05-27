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
import Orders from "./Pages/Dashboard/Orders";
import AddReview from "./Pages/Dashboard/AddReview";
import AllOrders from "./Pages/Dashboard/AllOrders";
import RequireAdmin from "./Pages/Authentication/RequireAdmin";
import ManageTools from "./Pages/Dashboard/ManageTools";
import AddTools from "./Pages/Dashboard/AddTools";
import AllUsers from "./Pages/Dashboard/AllUsers";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.config";
import useAdmin from "./hooks/useAdmin";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
        }>
          {!admin && <Route index element={<Orders />}/>}
          <Route path="reviews" element={<AddReview />}/>
          {admin && 
            <Route index element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }>
            </Route>
          }
          <Route path="manage-tools" element={
            <RequireAdmin>
              <ManageTools />
            </RequireAdmin>
          }>
          </Route>
          <Route path="add-tools" element={
            <RequireAdmin>
              <AddTools />
            </RequireAdmin>
          }>
          </Route>
          <Route path="all-users" element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          }>
          </Route>
        </Route>
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
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

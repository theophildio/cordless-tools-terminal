import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.config";
import { signOut } from "firebase/auth";
import Spinner from "../Spinner";
import Logo from "../../../assets/icons/favicon.png";

const NavBar = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const logout = () => {
		signOut(auth);
		navigate('/');
	};

	if (loading) {
		return <Spinner />
	}

	const menuItems = (
		<>
			<li className="lg:mr-2">
				<NavLink to="/" className="font-semibold lg:text-lg">Home</NavLink>
			</li>
			<li className="lg:mr-2">
				<NavLink to="/tools" className="font-semibold lg:text-lg">All Tools</NavLink>
			</li>
			<li className="lg:mr-2">
				<NavLink to="/blogs" className="font-semibold lg:text-lg">Blogs</NavLink>
			</li>
			<li className="lg:mr-2">
				<NavLink to="/contact" className="font-semibold lg:text-lg">Contact Us</NavLink>
			</li>
			<li className="lg:mr-2">
				<NavLink to="/profile" className="font-semibold lg:text-lg">My Profile</NavLink>
			</li>
			{
				user && 
				<li className="lg:mr-2">
					<NavLink to="/dashboard" className="font-semibold lg:text-lg">Dashboard</NavLink>
				</li>
			}
			<li className="lg:mr-0">
				{
					user ? <button className="bg-red-500 text-base-100 capitalize" onClick={logout}><NavLink to="/login" className="font-semibold lg:text-lg">Sing out</NavLink></button> 
					: <NavLink to="/login" className="font-semibold lg:text-lg capitalize">Sign in</NavLink>
				}
			</li>
		</>
	);
	return (
		<div className="navbar justify-between px-4 lg:px-12">
      <div className="w-full lg:w-2/5">
        <Link to="/" className="normal-case text-md lg:text-2xl font-semibold text-primary">
					<img src={Logo} alt="Cordless Tools Terminal Logo" className="w-10 lg:w-14 inline-block" /> <span>Cordless Tools Terminal</span>
				</Link>
      </div>
			<div className="navbar-end lg:hidden">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-neutral lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact right-0 dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
					>
            {menuItems}
          </ul>
				</div>
			</div>
			<div className="navbar-end hidden lg:w-full lg:flex">
				<ul className="menu menu-horizontal p-0">
					{menuItems}
				</ul>
			</div>
		</div>
	);
};

export default NavBar;

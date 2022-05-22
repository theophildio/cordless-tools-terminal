import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	const menuItems = (
		<>
			<li className="mr-2">
				<NavLink to="/" className="font-semibold text-lg">Home</NavLink>
			</li>
			<li className="mr-2">
				<NavLink to="/purchase" className="font-semibold text-lg">Purchase</NavLink>
			</li>
			<li className="mr-2">
				<NavLink to="/blogs" className="font-semibold text-lg">Blogs</NavLink>
			</li>
			<li className="mr-2">
				<NavLink to="/dashboard" className="font-semibold text-lg">Dashboard</NavLink>
			</li>
			<li className="mr-2">
				<NavLink to="/profile" className="font-semibold text-lg">My Profile</NavLink>
			</li>
			<li className="mr-0">
				<NavLink to="/login" className="font-semibold text-lg">Login</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar justify-between px-4 lg:px-12">
      <div className="w-full lg:w-1/4">
        <Link to="/" className="normal-case text-2xl font-semibold text-primary">
					Cordless Tools Terminal
				</Link>
      </div>
			<div className="navbar-end lg:hidden">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
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
						className="menu menu-compact right-0 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
            {menuItems}
          </ul>
				</div>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					{menuItems}
				</ul>
			</div>
		</div>
	);
};

export default NavBar;

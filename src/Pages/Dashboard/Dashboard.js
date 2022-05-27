import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.config";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	return (
		<>
			<div className="drawer drawer-mobile">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* <!-- Page content here --> */}
          <Outlet />
					<label
						htmlFor="my-drawer-2"
						className="btn btn-primary drawer-button lg:hidden"
					>
						Open Options
					</label>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 overflow-y-auto w-60 bg-neutral text-base-content">
						{/* <!-- Sidebar content here --> */}
						<li>
							{
								!admin && <Link to="/dashboard" className="text-lg mb-4">My Orders</Link>
							}
							{
								!admin && <Link to="/dashboard/reviews" className="text-lg mb-4">Add Review</Link>
							}
							{
								!admin && <Link to="/dashboard/user-profile" className="text-lg mb-4">Edit Profile</Link>
							}
							{
								admin && <Link to="/dashboard/all-orders" className="text-lg mb-4">All Orders</Link>
							}
							{
								admin && <Link to="/dashboard/manage-tools" className="text-lg mb-4">Manage Tools</Link>
							}
							{
								admin && <Link to="/dashboard/add-tools" className="text-lg mb-4">Add Tools</Link>
							}
							{
								admin && <Link to="/dashboard/all-users" className="text-lg mb-4">All Users</Link>
							}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

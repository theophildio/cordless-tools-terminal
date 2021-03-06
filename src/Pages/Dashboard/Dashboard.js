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
					<label
						htmlFor="my-drawer-2"
						className="btn btn-primary drawer-button lg:hidden m-4"
					>
						Open Dashboard Options
					</label>
					{
						admin && <h2 className="text-3xl font-bold pl-4 pt-4 capitalize text-primary">Admin dashboard</h2>
					}
					{
						!admin && <h2 className="text-3xl font-bold p-6 capitalize text-primary">User dashboard</h2>
					}
					<Outlet />
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
								admin && <Link to="/dashboard" className="text-lg mb-4">All Orders</Link>
							}
							{
								admin && <Link to="/dashboard/manage-tools" className="text-lg mb-4">Manage Tools</Link>
							}
							{
								admin && <Link to="/dashboard/add-tools" className="text-lg mb-4">Add Tools</Link>
							}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

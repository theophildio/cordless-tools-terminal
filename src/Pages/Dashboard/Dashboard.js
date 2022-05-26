import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
							<Link to="/dashboard" className="text-xl">Orders</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

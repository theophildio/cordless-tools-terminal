import React from "react";

const BusinessSummary = () => {
	return (
		<section className="stats w-full flex lg:flex-row flex-col shadow-md text-center my-4 lg:my-12">
			<div className="stat">
				<div className="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						></path>
					</svg>
				</div>
				<div className="stat-title">Happy Clients</div>
				<div className="stat-value text-primary">12.9K</div>
			</div>
			<div className="stat">
				<div className="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<div className="stat-title">Tool Sales</div>
				<div className="stat-value text-secondary">2.6M</div>
			</div>
			<div className="stat">
				<div className="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
						></path>
					</svg>
				</div>
				<div className="stat-title">Year of Manufacturing</div>
				<div className="stat-value text-primary">19</div>
			</div>
			<div className="stat">
				<div className="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						></path>
					</svg>
				</div>
				<div className="stat-title">Total Employee</div>
				<div className="stat-value text-secondary">29,191</div>
			</div>
		</section>
	);
};

export default BusinessSummary;

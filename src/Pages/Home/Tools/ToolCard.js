import React from "react";

const Tool = ({tool}) => {
	const {toolName, img,  description, quantity, price} = tool;
	return (
		<div className="card bg-base-100 shadow-md">
			<figure>
				<img
					src={img}
					alt="20V Cordless Drill" 
					className="w-4/5"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{toolName}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>{description}</p>
				<div className="card-actions justify-between mt-5">
					<div className="badge badge-outline">Quantity: {quantity}</div>
					<div className="badge badge-outline">Min. Order: 500 Pieces</div>
				</div>
				<div className="card-actions justify-between items-center mt-5">
					<div className="badge badge-outline">Price: ${price} / Piece</div>
					<button className="btn btn-sm">Purchase</button>
				</div>
			</div>
		</div>
	);
};

export default Tool;

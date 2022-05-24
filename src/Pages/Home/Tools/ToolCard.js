import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tool = ({tool}) => {
	const {_id, toolName, img,  description, quantity, price} = tool;
	const navigate = useNavigate();
	const handlePurchaseBtn = id => {
		navigate(`/purchase/${id}`);
	}
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
					<div className="badge badge-outline bg-primary text-base-100 p-3">Quantity: {quantity}</div>
					<div className="badge badge-outline bg-primary text-base-100 p-3">Min. Order: 500 Pieces</div>
				</div>
				<div className="card-actions justify-between items-center mt-5">
					<div className="badge badge-outline bg-primary text-base-100 p-3">Price: ${price} / Piece</div>
					<Link to={`purchase/${_id}`} onClick={() => handlePurchaseBtn(_id)} className="btn btn-sm">Purchase</Link>
				</div>
			</div>
		</div>
	);
};

export default Tool;

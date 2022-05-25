import React from "react";
import { useNavigate } from "react-router-dom";

const ToolCard = ({tool}) => {
	const {_id, toolName, img,  description, quantity, price} = tool;
	const navigate = useNavigate();
	const handlePurchaseBtn = id => {
		navigate(`/purchase/${id}`);
	}
	return (
		<div className="card bg-base-100 shadow-md cursor-pointer">
			<figure>
				<img
					src={img}
					alt="20V Cordless Drill" 
					className="w-3/5 duration-1000 hover:scale-75"
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
					<button onClick={() => handlePurchaseBtn(_id)} className="btn btn-sm">Purchase</button>
				</div>
			</div>
		</div>
	);
};

export default ToolCard;

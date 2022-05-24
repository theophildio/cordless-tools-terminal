import React from "react";

const PurchaseDetails = ({ purchase }) => {
	const { toolName, img, description, quantity, price } = purchase;
	return (
		<div>
			<div className="hero">
				<div className="hero-content lg:w-3/4 justify-between flex-col lg:flex-row">
					<div className="card bg-base-100 lg:w-1/2 shadow-md">
						<figure>
							<img src={img} alt="20V Cordless Drill" className="w-1/2" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								{toolName}
								<div className="badge badge-secondary">NEW</div>
							</h2>
							<p>{description}</p>
							<div className="card-actions justify-between mt-5">
								<div className="badge badge-outline bg-primary text-base-100 p-3">Quantity: {quantity}</div>
								<div className="badge badge-outline bg-primary text-base-100 p-3">
									Min. Order: 500 Pieces
								</div>
							</div>
							<div className="card-actions justify-between items-center mt-5">
								<div className="badge badge-outline bg-primary text-base-100 p-3">
									Price: ${price} / Piece
								</div>
							</div>
						</div>
					</div>
					<div className="card w-full lg:w-1/2 shadow-md bg-base-100">
						<div className="card-body p-5">
							<div className="form-control">
								<input
									type="text"
									placeholder="Name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<input
									type="tel"
									placeholder="Phone"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<textarea
									className="textarea textarea-bordered"
									placeholder="Your message"
								></textarea>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Inquiry Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PurchaseDetails;

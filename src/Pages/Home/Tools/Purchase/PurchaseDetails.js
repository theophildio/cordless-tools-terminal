import React from "react";

const PurchaseDetails = ({ purchase }) => {
	const { toolName, img, description, quantity, price } = purchase;
	return (
		<div>
			<div class="flex flex-col w-full lg:flex-row shadow-sm px-5">
				<div class="grid lg:w-1/2 card bg-base-100 rounded-box place-items-center lg:p-12">
				<div className="card lg:w-4/5 shadow-md">
						<figure>
							<img src={img} alt="20V Cordless Drill" className="w-1/2" />
						</figure>
						<div className="card-body p-0 lg:p-5">
							<h2 className="card-title">
								{toolName}
								<div className="badge badge-secondary">NEW</div>
							</h2>
							<p>{description}</p>
							<div className="card-actions justify-between mt-5">
								<div className="badge badge-outline bg-primary text-base-100 p-3">
									Quantity: {quantity}
								</div>
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
				</div>
				<div class="divider lg:divider-horizontal"></div>
				<div class="grid flex-grow card rounded-box place-items-center lg:p-5">
				<div className="card w-full shadow-md bg-base-100">
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
									type="text"
									placeholder="Address"
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
								<input
									type="text"
									placeholder="Min. Order: 500 pieces"
									className="input input-bordered"
								/>
							</div>
							<p className="text-lg font-semibold mt-4">Total Price: ${price}</p>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Place Order</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PurchaseDetails;

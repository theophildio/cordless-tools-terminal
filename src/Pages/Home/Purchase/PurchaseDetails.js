import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const PurchaseDetails = ({ purchase, user }) => {
	const { toolName, img, description, quantity, price } = purchase;
	const { displayName, email } = user;
	const [totalPirce, setTotalPrice] = useState(0);
	const navigate = useNavigate();

	// Min. quantity
	const handleCheckout = (e) => {
		e.preventDefault();
		const defaultMinQuantity = 500;
		const maxQuantity = quantity;
		const customerName = displayName;
		const customerEmail = email;
		const customerAddress = e.target.address.value;
		const customerPhone = e.target.phone.value;
		const inputMinQuantity = e.target.minQuantity.value;
		
		// handle errors
		if (customerAddress === "" && customerPhone === "" && inputMinQuantity === "") {
			return toast.error('Please fill up all blank fields.');
		}
		if (customerAddress === "") {
			return toast.error('Please input your address.');
		}
		if (customerPhone === "") {
			return toast.error('Please input your phone number.');
		}
		if (inputMinQuantity === "") {
			return toast.error('Please input minimum quantity.');
		}
		// Min quantity handle
		if (inputMinQuantity < defaultMinQuantity) {

			return toast.error(`Minimum quantity must be ${defaultMinQuantity} pieces!!`);
		}
		if (inputMinQuantity > maxQuantity) {
			return toast.error(`Sorry! ${inputMinQuantity} quantities is not available in stock.`);
		}
		const setPrice = inputMinQuantity * price;
		setTotalPrice(setPrice);
		const order = {
			name: customerName,
			email: customerEmail,
			address: customerAddress,
			phone: customerPhone,
			tool: toolName,
			minQty: inputMinQuantity,
			price: totalPirce
		}
		fetch('http://localhost:5000/order', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`
			},
			body: JSON.stringify(order)
		})
		.then(res => res.json())
		.then(inserted => {
			if(inserted.insertedId) {
				toast.success('Order place successful. Plase pay now.');
				navigate('/dashboard')
			}
			else {
				toast.error('Order place is unsuccessful. Try again.');
			}
		})
	}

	return (
		<div>
			<div className="flex flex-col w-full lg:flex-row shadow-sm">
				<div className="grid lg:w-1/2 card bg-base-100 rounded-box place-items-center lg:p-12">
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
				<div className="divider lg:divider-horizontal"></div>
				<div className="grid flex-grow card rounded-box place-items-center lg:p-5">
					<div>
						<h2 className="text-3xl font-semibold capitalize">Check out</h2>
					</div>
					<div className="card w-full shadow-md bg-base-100">
						<div className="card-body p-5">
							<form onSubmit={handleCheckout}>
								<div className="form-control mb-5">
									<input
										type="text"
										value={displayName}
										readOnly
										className="input input-bordered"
									/>
								</div>
								<div className="form-control mb-5">
									<input
										type="email"
										value={email}
										readOnly
										className="input input-bordered"
									/>
								</div>
								<div className="form-control mb-5">
									<input
										name="address"
										type="text"
										placeholder="Address"
										className="input input-bordered"
									/>
								</div>
								<div className="form-control mb-5">
									<input
										name="phone"
										type="tel"
										placeholder="Phone"
										className="input input-bordered"
									/>
								</div>
								<div className="form-control mb-5">
									<input
										type="text"
										value={toolName}
										readOnly
										className="input input-bordered"
									/>
								</div>
								<div className="form-control mb-5">
									<input
										name="minQuantity"
										type="number"
										placeholder="Min. Order: 500 pieces"
										className="input input-bordered"
									/>
								</div>
								<p className="text-lg font-semibold mt-4">
									Total Price: ${totalPirce}
								</p>
								<div className="form-control mt-6">
									<button className="btn btn-primary">Place Order</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PurchaseDetails;

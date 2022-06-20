import React from "react";
import { toast } from "react-toastify";

const CancleModal = ({ cancleOrder, setCancleOrder, refetch}) => {
	console.log(cancleOrder);
	const { email } = cancleOrder;
	const handleDelete = () => {
		fetch(`https://cordless-tools-terminal.herokuapp.com/order/${email}`, {
			method: "DELETE",
			headers: {
				'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					toast.error("Your order have been cancled!!");
					setCancleOrder(null);
					refetch();
				}
			});
	};
	return (
		<div>
			<input type="checkbox" id="cancle-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-red-500">
						Do you want to cancle the order?
					</h3>
					<p className="py-4">
						Once you cancle, it will be removed from your order list!!
					</p>
					<div className="modal-action">
						<button
							onClick={() => handleDelete()}
							className="btn btn-xs border-0 bg-red-500"
						>
							Yes
						</button>
						<label
							htmlFor="cancle-modal"
							className="btn btn-xs bg-green-500 border-0"
						>
							No
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CancleModal;

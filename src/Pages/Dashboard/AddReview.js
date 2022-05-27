import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9",
};

const AddReview = () => {
	const [user] = useAuthState(auth);
	const [ratingValue, setRatingValue] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const stars = Array(5).fill(0);
	const handleClick = (value) => {
		setRatingValue(value);
	};

	const handleMouseOver = (newHoverValue) => {
		setHoverValue(newHoverValue);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};
	// Collect rating infos
  const handleReview = e => {
    e.preventDefault();
    const reviewDetail = e.target.details.value;
    if (ratingValue === 0) {
      return toast.error("Please give rating.");
    }
    else if ( reviewDetail === "") {
      return toast.error("Textbox is empty");
    }
    else if (reviewDetail.length < 15) {
      return toast.error("Your feedback is less than 15 characters!!");
    } else {
      const review = {
        rating: ratingValue,
        userName: user.displayName ? user.displayName : "Happy Client",
        userPhotoURL: user.photoURL ? user.photoURL : "https://i.ibb.co/9rvYVfX/reviewer.png",
        reviewDetail: reviewDetail
      }
      console.log(review);
      fetch('http://localhost:5000/review', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						'authorization': `Bearer ${localStorage.getItem('accessToken')}`
					},
					body: JSON.stringify(review)
				})
				.then(res => res.json())
				.then(inserted => {
					if(inserted.insertedId) {
						toast.success('Thank you for your review.');
					}
					else {
						toast.error('Review submit is unsuccessful. Try again.');
					}
				})
    }
    
  }

	return (
		<div className="p-8">
			<div className="w-1/2 mx-auto mt-8">
				<h2 className="text-2xl font-bold capitalize text-primary mb-4">
					Add review
				</h2>
				<form onSubmit={handleReview} className="shadow-md p-6 rounded-md">
					<div>
						<h2 className="mb-2 text-lg text-secondary font-semibold">
							{" "}
							Give Your Ratings{" "}
						</h2>
						<div className="flex flex-row mb-4">
							{stars.map((_, index) => {
								return (
									<FaStar
										key={index}
										size={24}
										onClick={() => handleClick(index + 1)}
										onMouseOver={() => handleMouseOver(index + 1)}
										onMouseLeave={handleMouseLeave}
										color={
											(hoverValue || ratingValue) > index
												? colors.orange
												: colors.grey
										}
										style={{
											marginRight: 10,
											cursor: "pointer",
										}}
									/>
								);
							})}
						</div>
					</div>
					<div className="form-control mb-4">
						<input
							type="text"
							value={user.displayName ? user.displayName : "Happy Client"}
							readOnly
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Writh your review</span>
						</label>
						<textarea className="textarea textarea-bordered" name="details"></textarea>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddReview;

import React from "react";

const ReviewCard = ({review}) => {
  const {avatar, name, userReview} = review;
  const showReview = userReview.slice(0, 85);
	return (
		<>
			<div className="card flex-col lg:flex-row items-center card-side bg-base-100 shadow-md p-5">
				<div>
					<div className="avatar">
						<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={avatar} alt="Avatar"/>
						</div>
					</div>
				</div>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<p>{showReview}...</p>
					<div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
				</div>
			</div>
		</>
	);
};

export default ReviewCard;

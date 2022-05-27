import React from "react";

const ReviewCard = ({review}) => {
  const {userPhotoURL, userName, reviewDetail, rating} = review;
	return (
		<>
			<div className="card flex-col lg:flex-row items-center card-side bg-base-100 shadow-md p-5">
				<div>
					<div className="avatar">
						<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={userPhotoURL} alt="Avatar"/>
						</div>
					</div>
				</div>
				<div className="card-body">
					<h2 className="card-title">{userName}</h2>
					<p>{reviewDetail}</p>
					<div className="rating">
            <p className="text-primary font-semibold">Ratings <span className="text-orange-500">{rating}</span> out of 5</p>
          </div>
				</div>
			</div>
		</>
	);
};

export default ReviewCard;

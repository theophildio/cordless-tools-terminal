import React from "react";
import { useQuery } from "react-query";
import Spinner from "../SharedPages/Spinner";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const {data: reviews, isLoading} = useQuery('reviews', () => 
    fetch('https://cordless-tools-terminal.herokuapp.com/review', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  );

  if (isLoading) {
    return <Spinner />
  }

	return (
		<section className="px-4 lg:py-12 lg:px-12">
			<h2 className="text-2xl lg:text-4xl font-bold text-secondary text-center mb-8 capitalize">Our Customer Reviews</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {
          reviews?.map( review => <ReviewCard 
            key={review._id}
            review={review}
          ></ReviewCard>)
        }
      </div>
		</section>
	);
};

export default Reviews;

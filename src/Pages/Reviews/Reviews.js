import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      avatar: 'https://api.lorem.space/image/face?hash=3174',
      name:'Josh McGaffigan',
      userReview: 'Hilti Introduces A Compact Cordless Hammer Drill To The Nuron Platform We’ve seen some really cool stuff coming from the Hilti team ever since the launch of its Nuron battery platform. Many of the solid workhorse tools debuted on this system along with some newcomers.',
      rating: '4'
    },
    {
      id: 2,
      avatar: 'https://api.lorem.space/image/face?hash=3174',
      name:'Josh McGaffigan',
      userReview: 'Hilti Introduces A Compact Cordless Hammer Drill To The Nuron Platform We’ve seen some really cool stuff coming from the Hilti team ever since the launch of its Nuron battery platform. Many of the solid workhorse tools debuted on this system along with some newcomers.',
      rating: '4'
    },
    {
      id: 3,
      avatar: 'https://api.lorem.space/image/face?hash=3174',
      name:'Josh McGaffigan',
      userReview: 'Hilti Introduces A Compact Cordless Hammer Drill To The Nuron Platform We’ve seen some really cool stuff coming from the Hilti team ever since the launch of its Nuron battery platform. Many of the solid workhorse tools debuted on this system along with some newcomers.',
      rating: '4'
    },
  ]
	return (
		<section className="px-4 lg:py-12 lg:px-12">
			<h2 className="text-2xl lg:text-4xl font-bold text-secondary text-center mb-8 capitalize">Our Customer Reviews</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {
          reviews.map( review => <ReviewCard 
            key={review.id}
            review={review}
          ></ReviewCard>)
        }
      </div>
		</section>
	);
};

export default Reviews;

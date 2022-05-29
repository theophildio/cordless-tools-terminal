import React from 'react';
import ExtraInfo from './ExtraInfo';
import MyDetail from './MyDetail';

const MyPortfolio = () => {
  return (
    <div className='px-4 lg:px-12 my-5'>
      <h2 className='text-4xl font-bold capitalize text-primary mb-8'>My portfolio</h2>
      <div className="flex flex-col w-full lg:flex-row">
				<MyDetail />
				<div className="divider lg:divider-horizontal"></div>
				<div className="lg:w-2/3 min-h-screen bg-neutral rounded-box p-8">
					<ExtraInfo />
				</div>
			</div>
    </div>
  );
};

export default MyPortfolio;
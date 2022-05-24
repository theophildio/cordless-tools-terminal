import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className='min-h-screen flex items-center flex-col justify-center px-4'>
      <h1 className='text-7xl lg:text-9xl font-extrabold text-secondary text-center mb-10'>Oops!</h1>
      <h2 className='text-5xl lg:text-7xl font-bold text-primary text-center'>404 - Page not found...</h2>
      <button className="btn btn-wide mt-10"><Link to='/home'>Go to homepage</Link></button>
    </div>
  );
};

export default Page404;
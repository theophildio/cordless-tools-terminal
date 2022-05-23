import React from 'react';
import Reviews from '../Reviews/Reviews';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import InquiryForm from './InquiryForm';
import Tools from './Tools/Tools';

const Home = () => {
  return (
    <>
      <Banner />
      <main className='px-4 lg:px-12'>
        <Tools />
        <About />
        <BusinessSummary />
        <Reviews /> 
        <InquiryForm />
      </main>
    </>
  );
};

export default Home;
import React from 'react';
import Reviews from '../Reviews/Reviews';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import InquiryForm from './InquiryForm';
import ToolForHome from './Tools/ToolForHome';


const Home = () => {
  return (
    <>
      <Banner />
      <main className='px-4 lg:px-12'>
        <ToolForHome />
        <About />
        <BusinessSummary />
        <Reviews /> 
        <InquiryForm />
      </main>
    </>
  );
};

export default Home;
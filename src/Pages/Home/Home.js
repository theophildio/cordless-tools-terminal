import React from 'react';
import Banner from './Banner';
import Tools from './Tools/Tools';

const Home = () => {
  return (
    <>
      <Banner />
      <main className='px-4 lg:px-12'>
        <Tools />
      </main>
    </>
  );
};

export default Home;
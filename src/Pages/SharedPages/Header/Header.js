import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className='lg:fixed lg:left-0 lg:right-0 z-50 bg-secondary'>
      <NavBar />
    </div>
  );
};

export default Header;
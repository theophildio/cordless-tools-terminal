import React from 'react';
import Google from '../../../assets/icons/google.png';

const SocialLogin = () => {
  return (
    <div>
      <button className="btn btn-wide"> <img src={Google} alt="Google Icon" className='w-8 mr-2'/> Continue with Google</button>
    </div>
  );
};

export default SocialLogin;
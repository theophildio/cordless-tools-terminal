import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = ({user}) => {
  const {userAddress, userCity, userCountry, userDistrict, userInURL, userPhone} = user;
  return (
    <>
      <div className="w-1/3 card bg-accent rounded-box p-6 lg:pt-12">
        <div className="flex flex-col">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/9rvYVfX/reviewer.png'} alt="User" className="w-1/5 lg:w-2/5" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-semibold">{user?.displayName ? user?.displayName : "Guest User"}</h3>
          <p className="my-2">Email: {user?.email}</p>
        </div>
        <div>
          <p className="mb-2">Address: {userAddress}</p>
          <p className="mb-2">City: {userCity}</p>
          <p className="mb-2">District: {userDistrict}</p>
          <p className="mb-2">Country: {userCountry}</p>
          <p className="mb-2">Phone: {userPhone}</p>
          <Link to={userInURL} className="mb-2">Linkedin: {userInURL}</Link>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
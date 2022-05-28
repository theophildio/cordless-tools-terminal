import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';

const ProfileDetails = ({users, refetch}) => {
  const [user] = useAuthState(auth);
  
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
          <p className="mb-2">Address: {users?.userAddress}</p>
          <p className="mb-2">Police Station: {users?.userCity}</p>
          <p className="mb-2">District: {users?.userDistrict}</p>
          <p className="mb-2">Country: {users?.userCountry}</p>
          <p className="mb-2">Phone: {users?.userPhone}</p>
          <p className="mb-2">Linkedin: {users?.userInURL}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
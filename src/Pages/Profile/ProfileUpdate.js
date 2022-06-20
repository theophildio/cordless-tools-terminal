import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';

const ProfileUpdate = ({refetch}) => {
  const [user] = useAuthState(auth);
  const [updateProfieData, setUpdateProfileData] = useState([]);
  const handleProfileUpdate = e => {
    e.preventDefault();
    const address = e.target.address.value;
    const policeStation = e.target.ps.value;
    const district = e.target.district.value;
    const country = e.target.country.value;
    const phone = e.target.phone.value;
    const inURL = e.target.inURL.value;
    // Error handling
    if (address === "") {
      return toast.error("Please update your address.");
    } else if (policeStation === "") {
      return toast.error("Please update your police station.");
    } else if (district === "") {
      return toast.error("Please update your district.");
    } else if (country === "") {
      return toast.error("Please update your country.");
    } else if (phone === "") {
      return toast.error("Please update your phone number.");
    } else if (inURL === "") {
      return toast.error("Please update your Linkedin url.");
    } else {
      const updateProfile = {
        userAddress: address,
        userPS: policeStation,
        userDistrict: district,
        userCountry: country,
        userPhone: phone,
        userInURL: inURL
      }
      fetch(`https://cordless-tools-terminal.herokuapp.com/user/${user.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(updateProfile)
      })
      .then(res => res.json())
      .then(data => {
        if(data) {
           setUpdateProfileData(data);
          toast.success("Profile update successful!!");
          e.target.address.value = "";
          e.target.ps.value = "";
          e.target.district.value = "";
          e.target.country.value = "";
          e.target.phone.value = "";
          e.target.inURL.value = "";
          refetch();
        } else {
          toast.error("Profile update failed!!");
        }
      })
    }
  }

  return (
    <>
      <form onSubmit={handleProfileUpdate}>
        <div className="flex flex-col lg:flex-row  w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text capitalize">Update your address</span>
            </label>
            <input type="text" name='address' className="input input-bordered lg:w-4/5 w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text capitalize">Police station</span>
            </label>
            <input type="text" name='ps' className="input input-bordered lg:w-4/5 w-full" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text capitalize">District</span>
            </label>
            <input type="text" name='district' className="input input-bordered lg:w-4/5 w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text capitalize">Country</span>
            </label>
            <input type="text" name='country' className="input input-bordered lg:w-4/5 w-full" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text capitalize">Phone</span>
            </label>
            <input type="tel" name='phone' className="input input-bordered lg:w-4/5 w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text capitalize">Linkkedin Profile Link</span>
            </label>
            <input type="url" name='inURL' className="input input-bordered lg:w-4/5 w-full" />
          </div>
        </div>
        <div className="form-control w-full mt-8">
          <input type="submit" value="Update" className="btn btn-primary input-bordered w-2/5" />
        </div>
      </form>
    </>
  );
};

export default ProfileUpdate;
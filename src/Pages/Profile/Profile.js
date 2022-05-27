import React from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileUpdate from "./ProfileUpdate";

const Profile = () => {
  
	return (
		<div className="p-4 lg:p-12">
			<div className="flex flex-col w-full lg:flex-row">
				<ProfileDetails />
				<div className="divider lg:divider-horizontal"></div>
				<div className="w-2/3 min-h-screen bg-neutral rounded-box p-8">
					<h3 className="text-3xl font-semibold mb-4 text-primary">My profile</h3>
					<ProfileUpdate />
				</div>
			</div>
		</div>
	);
};

export default Profile;

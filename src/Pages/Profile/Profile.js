import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import ProfileDetails from "./ProfileDetails";
import ProfileUpdate from "./ProfileUpdate";

const Profile = () => {
	const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
	useEffect(() => {
		if(user) {
			fetch(`http://localhost:5000/user/${user.email}`, {
				method: 'GET',
				headers: {
					'authorization': `Bearer ${localStorage.getItem('accessToken')}`
				}
			})
			.then(res => res.json())
			.then(data => setUsers(data));
		}
	}, [user]);

	return (
		<div className="p-4 lg:p-12">
			<div className="flex flex-col w-full lg:flex-row">
				<ProfileDetails users={users}/>
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

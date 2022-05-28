import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.config";
import Spinner from "../SharedPages/Spinner";
import ProfileDetails from "./ProfileDetails";
import ProfileUpdate from "./ProfileUpdate";

const Profile = () => {
	const [user] = useAuthState(auth);
  const {data: users, isLoading, refetch} = useQuery("users", () =>
		fetch(`https://cordless-tools-terminal.herokuapp.com/user/${user?.email}`, {	
			headers: {
				'authorization': `Bearer ${localStorage.getItem("accessToken")}`
			}
		})
		.then(res => res.json())
	);	
	if(isLoading) {
		return <Spinner />
	}

	return (
		<div className="p-4 lg:p-12">
			<div className="flex flex-col w-full lg:flex-row">
				<ProfileDetails users={users} refetch={refetch}/>
				<div className="divider lg:divider-horizontal"></div>
				<div className="w-2/3 min-h-screen bg-neutral rounded-box p-8">
					<h3 className="text-3xl font-semibold mb-4 text-primary">My profile</h3>
					<ProfileUpdate refetch={refetch}/>
				</div>
			</div>
		</div>
	);
};

export default Profile;

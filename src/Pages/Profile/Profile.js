import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import User from "../../assets/icons/reviewer.png";
import auth from "../../firebase.config";

const Profile = () => {
  const [user] = useAuthState(auth);
	return (
		<div className="p-4 lg:p-12">
			<div className="flex flex-col w-full lg:flex-row">
				<div className="grid w-1/5 h-60 card bg-accent rounded-box pt-6 lg:pt-12">
					<div className="flex items-center flex-col">
						<div className="avatar">
							<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/9rvYVfX/reviewer.png'} alt="User" className="w-1/5 lg:w-2/5" />
							</div>
						</div>
            <h3 className="mt-4 text-lg font-semibold">{user.displayName ? user.displayName : "Guest User"}</h3>
					</div>
				</div>
				<div className="divider lg:divider-horizontal"></div>
				<div className="grid w-4/5 min-h-screen bg-neutral rounded-box place-items-center">
					content
				</div>
			</div>
		</div>
	);
};

export default Profile;

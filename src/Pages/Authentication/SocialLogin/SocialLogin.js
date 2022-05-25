import React, { useEffect } from "react";
import Google from "../../../assets/icons/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import useToken from "../../../hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../SharedPages/Spinner";

const SocialLogin = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const [token] = useToken(gUser);

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/tools";

	useEffect(() => {
		if (token) {
			navigate(from, { replace: true });
		}
	}, [token, from, navigate]);

	if (gLoading) {
		return <Spinner />;
	}
	let errorMsg;
	if (gError) {
		errorMsg = <p className="text-red-500 text-sm mb-2">{gError?.message}</p>;
	}

	return (
		<div>
			{errorMsg}
			<div>
				<button onClick={() => signInWithGoogle()} className="btn btn-wide">
					{" "}
					<img src={Google} alt="Google Icon" className="w-8 mr-2" /> Continue
					with Google
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;

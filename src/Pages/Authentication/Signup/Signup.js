import React from "react";
import Logo from "../../../assets/icons/favicon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Spinner from "../../SharedPages/Spinner";
import auth from "../../../firebase.config";
import useToken from "../../../hooks/useToken";
import { toast } from 'react-toastify';

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
	const [sendEmailVerification] = useSendEmailVerification(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/tools";

  if (loading) {
    return <Spinner />
  }

  let errorMessage;

  if (error) {
    errorMessage = ( <p className="text-red-500 text-sm">{error?.message}</p> )
  }
  if (token) {
		navigate(from, { replace: true });
	}

	const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
		toast('Please check your mail inbox to verify email.');
		sendEmailVerification(data.email);
    navigate('/tools');
	};

  

	return (
		<>
			<div className="hero min-h-screen py-8">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card w-full lg:w-3/5 max-w-xl shadow-2xl bg-base-100">
						<div className="card-body">
							<h2 className="text-3xl font-semibold capitalize text-secondary">
								Sign up
							</h2>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										{...register("name", {
											required: {
												value: true,
												message: "Name is required.",
											},
										})}
										type="text"
										className="input input-bordered w-full"
									/>
									<label className="label">
										{errors.name?.type === "required" && (
											<span className="label-text-alt text-red-500">
												{errors.name.message}
											</span>
										)}
									</label>
								</div>
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										{...register("email", {
											required: {
												value: true,
												message: "Email is required.",
											},
											pattern: {
												value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
												message: "Please provide valid email address",
											},
										})}
										type="email"
										className="input input-bordered w-full"
									/>
									<label className="label">
										{errors.email?.type === "required" && (
											<span className="label-text-alt text-red-500">
												{errors.email.message}
											</span>
										)}
										{errors.email?.type === "pattern" && (
											<span className="label-text-alt text-red-500">
												{errors.email.message}
											</span>
										)}
									</label>
								</div>
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input
										{...register("password", {
											required: {
												value: true,
												message: "Password is required.",
											},
											pattern: {
												value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
												message: "Minimum 8 and maximum 12 characters, at least one uppercase, lowercase, number and special character"
											},
										})}
										type="password"
										className="input input-bordered w-full"
									/>
									<label className="label">
										{errors.password?.type === "required" && (
											<span className="label-text-alt text-red-500">
												{errors.password.message}
											</span>
										)}
										{errors.password?.type === "pattern" && (
											<span className="label-text-alt text-red-500">
												{errors.password.message}
											</span>
										)}
									</label>
								</div>
                {errorMessage}
								<div>
									<input
										type="submit"
										value="Sign up"
										className="btn w-full mt-2"
									/>
								</div>
							</form>
							<p className="mt-2">
								Already have an account?
								<Link to="/login" className="ml-2 text-secondary">
									Sign In
								</Link>
							</p>
							<div className="divider">OR</div>
							<div className="flex justify-center items-center">
								<SocialLogin />
							</div>
						</div>
					</div>
					<div className="text-center w-full lg:w-2/5">
						<div>
							<img src={Logo} alt="Logo" className="w-1/5 mx-auto mb-5" />
						</div>
						<h1 className="text-2xl font-bold text-primary">
							Cordless Tools Terminal
						</h1>
						<p className="py-6">
							Your ultimate cordless tool's solution is here!!!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;

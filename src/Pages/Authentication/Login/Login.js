import React from "react";
import Logo from "../../../assets/icons/favicon.png";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.config";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
	};

	let errorMessage;

	if (error) {
		errorMessage = <p className="text-red-500 text-sm">{error?.message}</p>;
	}

	return (
		<>
			<div className="hero min-h-screen py-8">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card w-full lg:w-3/5 max-w-xl shadow-2xl bg-base-100">
						<div className="card-body">
							<h2 className="text-3xl font-semibold capitalize text-secondary">
								Login
							</h2>
							<form onSubmit={handleSubmit(onSubmit)}>
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
												value:
													/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
												message:
													"Minimum 8 and maximum 10 characters, at least one uppercase, lowercase, number and special character",
											},
										})}
										type="password"
										className="input input-bordered w-full"
									/>
									<label className="label">
										<Link to="" className="label-text-alt link link-hover">
											Forgot password?
										</Link>
									</label>
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
									<input type="submit" value="Login" className="btn w-full" />
								</div>
							</form>
							<p className="mt-2">
								Don't have an account?
								<Link to="/signup" className="ml-2 text-secondary">
									Signup
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

export default Login;

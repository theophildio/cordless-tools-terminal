import React from "react";

const InquiryForm = () => {
	return (
		<section className="lg:py-12 py-5">
			<h2 className="text-2xl lg:text-4xl font-bold text-primary text-center capitalize">
				Send your message to us
			</h2>
			<div className="hero">
				<div className="hero-content lg:w-3/4 justify-between flex-col lg:flex-row-reverse">
					<div className="card w-full lg:w-1/2 shadow-md bg-base-100">
						<div className="card-body p-5">
							<div className="form-control">
								<input
									type="text"
									placeholder="Name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<input
									type="tel"
									placeholder="Phone"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<textarea
									className="textarea textarea-bordered"
									placeholder="Your message"
								></textarea>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Inquiry Now</button>
							</div>
						</div>
					</div>
					<div className="text-center lg:text-left lg:w-1/2">
						<h1 className="text-2xl font-bold capitalize">Contact details</h1>
						<p className="lg:py-2">
            Address: No. 101, Katgola, Mymensingh, Bangladesh.
						</p>
						<p className="lg:py-2">
            Email: info@cordlesstoolsterminal.com
						</p>
						<p className="lg:py-2">
            Call to: +880 1712 345 678
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InquiryForm;

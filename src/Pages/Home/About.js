import React from "react";
import AboutImg from '../../assets/images/banner-bg.jpg';

const About = () => {
	return (
		<section className="hero min-h-min lg:py-8">
			<div className="hero-content flex-col lg:flex-row">
				<img
					src={AboutImg}
          alt=""
					className="w-full lg:w-2/5 rounded-lg"
				/>
				<div className="ml-5">
					<h1 className="text-4xl font-bold text-primary">Company Profile</h1>
					<p className="py-6">
          Cordless Tools Terminal electric Appliance Co., Ltd. is a professional manufacturer of Li-ion tools. Located in Mymensingh, Bangladesh. Cordless Tools Terminal enjoys great advantages of best resources including the production technology, R & D ability and the talented persons. The company has a sound industrial production base, with modern industrial plants and first-class production and testing equipment; At the same time, Cordless Tools Terminal have an complete experienced and energetic team composed of Purchasing Department, Marketing Department, Sales Department, R & D Department and Quality Department.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;

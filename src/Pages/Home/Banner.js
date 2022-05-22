import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/images/banner-bg.jpg";

const Banner = () => {
	return (
		<section style={{
      backgroundImage: `url(${BannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat' 
      }}>
			<div className="hero lg:min-h-screen">
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-5xl">
						<h1 className="mb-5 text-primary text-4xl lg:text-5xl font-bold capitalize">Self-Developed new products</h1>
            <p className="text-lg lg:text-2xl font-semibold uppercase mb-5">one battery for all <span className="text-secondary">20v li-ion</span></p>
						<p className="mb-5 text-xl">
							Professional lithium battery tool manufacturer and supplier. Having more than 10 years OEM/ODM experience with independent research and development of Li-ion products.
						</p>
						<button className="btn btn-secondary mt-6"><Link to="/contact">send inquiry now</Link></button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;

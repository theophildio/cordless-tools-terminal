import React from "react";
import useTools from "../../../hooks/useTools";
import ToolCard from "./ToolCard";

const Tools = () => {
	const [tools] = useTools();
	return (
		<section className="py-5 lg:py-16 px-4 lg:px-12">
			<h2 className="text-2xl lg:text-4xl font-bold mb-8 text-primary text-center capitalize">
				Cordless Tools
			</h2>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10'>
				{tools.map((tool) => (
					<ToolCard key={tool._id} tool={tool} />
				))}
			</div>
		</section>
	);
};

export default Tools;

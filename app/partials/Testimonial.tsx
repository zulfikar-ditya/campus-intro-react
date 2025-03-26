import React from "react";
import TestimonialItem from "./TestimonialItem";

export default function Testimonial() {
	const testimonials = [
		{
			quote:
				'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus commodi alias deserunt nihil ab, corporis blanditiis doloremque dolor illum excepturi eveniet beatae cupiditate maxime aperiam nesciunt voluptatem, dolore omnis!"',
			name: "John Doe",
			title: "CEO",
			imagePath: "/images/person-1.png",
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus commodi alias deserunt nihil ab, corporis blanditiis doloremque dolor illum excepturi eveniet beatae cupiditate maxime aperiam nesciunt voluptatem, dolore omnis!"',
			name: "John Doe",
			title: "CEO",
			imagePath: "/images/person-2.png",
		},
	];

	return (
		<section className="grid grid-cols-12 py-20 px-4 md:px-8 lg:px-12">
			<h2 className="text-4xl font-bold text-slate-900 col-span-5">
				Testimonial
			</h2>
			<div className="text-slate-800 mt-4 col-span-7">
				<ul>
					{testimonials.map(({ quote, name, title, imagePath }, index) => (
						<TestimonialItem
							quote={quote}
							name={name}
							title={title}
							imagePath={imagePath}
							key={index}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}

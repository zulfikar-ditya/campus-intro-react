import React from "react";
import RecentWorkItem from "./RecentWorkItem";

export default function RecentWork() {
	const recentWork = [
		{
			title: "Decodable.co",
			description: "Brand Design - Webflow Development - Web Design",
		},
		{
			title: "Gofirefly.io",
			description: "Brand Design - Webflow Development - Web Design",
		},
		{
			title: "Blinkops.com",
			description: "Brand Design - Webflow Development - Web Design",
		},
		{
			title: "Withkanvas.com",
			description: "Brand Design - Webflow Development - Web Design",
		},
	];

	return (
		<section className="grid grid-cols-12 py-20 px-4 md:px-8 lg:px-12">
			<h2 className="text-4xl font-bold text-slate-900 col-span-5">
				Recent Work
			</h2>
			<div className="col-span-7">
				<ul className="space-y-8 w-full">
					{recentWork.map(({ title, description }, index) => (
						<RecentWorkItem title={title} place={description} key={index} />
					))}
				</ul>
			</div>
		</section>
	);
}

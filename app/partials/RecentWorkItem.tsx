import React from "react";

export default function RecentWorkItem({
	title,
	place,
}: {
	title: string;
	place: string;
}) {
	return (
		<li className="flex items-center justify-between space-x-4 w-full border-solid pb-4 border-b border-slate-400">
			<div className="">
				<h3 className="text-4xl font-bold mb-8">{title}</h3>
				<p>{place}</p>
			</div>
			<div className="group border border-solid border-slate-900 p-4 rounded-full cursor-pointer hover:bg-slate-900">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right group-hover:text-white"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M17 7l-10 10" />
					<path d="M8 7l9 0l0 9" />
				</svg>
			</div>
		</li>
	);
}

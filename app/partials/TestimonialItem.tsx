import Image from "next/image";
import React from "react";

export default function TestimonialItem({
	quote,
	name,
	title,
	imagePath,
}: Readonly<{
	quote: string;
	name: string;
	title: string;
	imagePath: string;
}>) {
	return (
		<li className="mb-10">
			<p className="text-slate-600 text-2xl">{quote}</p>
			<div className="flex mt-4">
				<div className="">
					<Image
						src={imagePath}
						alt="Avatar"
						width={120}
						height={120}
						className="h-12 w-12 rounded-full"
					/>
				</div>
				<div className="ml-4">
					<h3 className="text-slate-900 font-bold">{name}</h3>
					<p className="text-slate-800">{title}</p>
				</div>
			</div>
		</li>
	);
}

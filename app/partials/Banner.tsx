import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Banner() {
	return (
		<div className="bg-slate-300 min-h-screen flex flex-col isolate relative">
			<div className="px-4 md:px-8 lg:px-12 flex-grow">
				<Navbar />
			</div>

			<div className="relative h-[600px] w-full px-4 md:px-8 lg:px-12 z-[-1]">
				<Image
					src="/images/image-1.png"
					alt="Hero"
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>
			<h2 className="text-white text-[140px] text-nowrap text-center overflow-hidden -ml-40 -mt-56 z-10">
				Webflow Developer - UI/UX Designer
			</h2>

			<button className="group flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white p-8 rounded-bl-full rounded-tl-full z-20 text-2xl cursor-pointer transition-all duration-300">
				👋
				<span className="invisible hidden w-0 overflow-hidden group-hover:visible group-hover:w-auto group-hover:ml-2 group-hover:block whitespace-nowrap transition-all duration-300">
					Hi I&lsquo;m Ayush
				</span>
			</button>
		</div>
	);
}

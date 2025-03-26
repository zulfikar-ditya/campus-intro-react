"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavDrawer() {
	const [showScrollButton, setShowScrollButton] = useState(false);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<div>
			{/* Scroll Button */}
			<div
				className={`fixed right-4 top-4 z-50 transition-opacity duration-300 ${
					showScrollButton ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<button
					onClick={toggleDrawer}
					className="bg-slate-600 text-white p-3 rounded-full shadow-lg hover:bg-slate-700"
					aria-label="Open Sidebar"
				>
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
					>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</svg>
				</button>
			</div>

			{/* Backdrop */}
			<div
				className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
					isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={toggleDrawer}
				aria-hidden="true"
			></div>

			{/* Sidebar/Drawer */}
			<div
				className={`fixed top-0 right-0 h-full w-[50vw] bg-slate-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
					isDrawerOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="px-12 py-8 h-full">
					<button
						onClick={toggleDrawer}
						className="absolute top-4 right-4 bg-white p-5 rounded-full shadow-lg cursor-pointer"
						aria-label="Close Sidebar"
					>
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
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>

					<nav>
						<ul className="space-y-2 mt-20">
							<li className="hover:list-disc my-4">
								<a
									href="#"
									className="block text-slate-200 hover:text-slate-10 text-3xl"
								>
									Home
								</a>
							</li>
							<li className="hover:list-disc my-4">
								<a
									href="#"
									className="block text-slate-200 hover:text-slate-10 text-3xl"
								>
									About
								</a>
							</li>
							<li className="hover:list-disc my-4">
								<a
									href="#"
									className="block text-slate-200 hover:text-slate-10 text-3xl"
								>
									Projects
								</a>
							</li>
							<li className="hover:list-disc my-4">
								<Link
									href={"/contact"}
									className="block text-slate-200 hover:text-slate-10 text-3xl"
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					<div className="absolute bottom-8 left-12 right-12 px-4">
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-slate-200 hover:text-white"
								aria-label="Facebook"
							>
								Linkedin
							</a>
							<a
								href="#"
								className="text-slate-200 hover:text-white"
								aria-label="Twitter"
							>
								Twitter
							</a>
							<a
								href="#"
								className="text-slate-200 hover:text-white"
								aria-label="Instagram"
							>
								Instagram
							</a>
							<a
								href="#"
								className="text-slate-200 hover:text-white"
								aria-label="LinkedIn"
							>
								Webflow
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

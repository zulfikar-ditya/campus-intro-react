import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<footer className="bg-slate-900 text-white py-10 px-4 md:px-8 lg:px-12">
			<div className="flex flex-col justify-between">
				<div className="px-4 flex-grow flex flex-row justify-between items-center">
					<div className="flex flex-col">
						<h1 className="text-5xl font-bold mb-6">Have something in mind?</h1>

						<div className="flex items-end ">
							<Image
								src="/images/footer-image.png"
								alt="Illustration"
								width={50}
								height={50}
							/>
							<p className="text-5xl ml-5">let's build it together.</p>
						</div>
					</div>

					<a
						href="/contact"
						className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
					>
						Get in touch
					</a>
				</div>

				<div className="px-4 py-6 flex justify-between items-center">
					<div className="text-sm">Build with ❤️ by Brightscout & Ayush</div>

					<div className="flex space-x-4 items-center">
						<a
							href="https://www.linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M8 11v5" />
								<path d="M8 8v.01" />
								<path d="M12 16v-5" />
								<path d="M16 16v-3a2 2 0 1 0 -4 0" />
								<path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
							</svg>
						</a>
						<a
							href="https://www.twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
								<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
							</svg>
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
								<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
								<path d="M16.5 7.5v.01" />
							</svg>
						</a>
						<a
							href="https://www.webflow.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							Webflow
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

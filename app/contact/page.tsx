import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Image from "next/image";

export default function Contact() {
	return (
		<div>
			<div className="px-4 md:px-8 lg:px-12 flex-grow">
				<Navbar />
			</div>

			<div className="grid grid-cols-2 px-4 md:px-8 lg:px-12 py-20">
				<div className="w-full">
					<Image
						src="/images/contact-image.png"
						alt="Contact"
						style={{ objectFit: "contain" }}
						width={400}
						height={400}
						className="rounded-full"
					/>

					<h2 className="text-slate-400 mt-8">Contact Details</h2>
					<p className="text-xl">ayush.barnwal@brightscout.com</p>
					<p className="text-xl">+91 1234567890</p>

					<h2 className="text-slate-400 mt-8">Social</h2>
					<p className="text-xl">LinkedIn</p>
					<p className="text-xl">Instagram</p>
					<p className="text-xl">Twitter</p>
					<p className="text-xl">Webflow</p>
					<p className="text-xl">Figma</p>
				</div>
				<div className="">
					<h2 className="text-4xl font-bold text-slate-900">
						Let's build something cool together
					</h2>

					<form className="mt-8 space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-slate-700"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="mt-1 block w-full px-3 py-2 border-b border-slate-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-b-blue-500"
								placeholder="Your name"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-slate-700"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="mt-1 block w-full px-3 py-2 border-b border-slate-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-b-blue-500"
								placeholder="your.email@example.com"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="subject"
								className="block text-sm font-medium text-slate-700"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="mt-1 block w-full px-3 py-2 border-b border-slate-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-b-blue-500"
								placeholder="Subject of your message"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-slate-700"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={6}
								className="mt-1 block w-full px-3 py-2 border-b border-slate-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-b-blue-500"
								placeholder="Your message here..."
								required
							></textarea>
						</div>

						<div>
							<button
								type="submit"
								className="py-3 px-4 bg-slate-900 hover:bg-slate-950 text-white font-bold shadow transition-colors rounded-full cursor-pointer"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</div>
	);
}

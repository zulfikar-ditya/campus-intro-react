"use client";
import About from "./partials/About";
import Banner from "./partials/Banner";
import Footer from "./partials/Footer";
import NavDrawer from "./partials/NavDrawer";
import Project from "./partials/Project";
import RecentWork from "./partials/RecentWork";
import Testimonial from "./partials/Testimonial";

export default function Home() {
	return (
		<main>
			{/* BANNER AND NAVBAR */}
			<Banner />
			{/* BANNER AND NAVBAR */}

			{/* ABOUT */}
			<About />
			{/* ABOUT */}

			{/* RECENT WORK */}
			<RecentWork />
			{/* RECENT WORK */}

			{/* PROJECTS */}
			<Project />
			{/* PROJECTS */}

			{/* TESTIMONIAL */}
			<Testimonial />
			{/* TESTIMONIAL */}

			{/* Footer */}
			<Footer />
			{/* Footer */}

			<NavDrawer />
		</main>
	);
}

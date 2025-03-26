import About from "./partials/About";
import Banner from "./partials/Banner";
import Project from "./partials/Project";
import RecentWork from "./partials/RecentWork";

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
		</main>
	);
}

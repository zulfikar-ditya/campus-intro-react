import { Carousel, CarouselContent } from "@/components/ui/carousel";
import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project() {
	const imagePaths = [
		"/images/project-1.png",
		"/images/project-2.png",
		"/images/project-3.png",
		"/images/project-4.png",
	];

	const imagePaths_Two = [
		"/images/project-5.png",
		"/images/project-6.png",
		"/images/project-7.png",
		"/images/project-8.png",
	];

	return (
		<section>
			<Carousel
				className="w-full px-20"
				opts={{
					align: "start",
					loop: true,
					active: true,
				}}
			>
				<CarouselContent className="-ml-1">
					{imagePaths.map((_, index) => (
						<ProjectItem imagePath={_} key={index} />
					))}
				</CarouselContent>
			</Carousel>

			<Carousel
				className="w-full px-20 mt-20"
				opts={{
					align: "start",
					loop: true,
					active: true,
				}}
			>
				<CarouselContent className="-ml-1">
					{imagePaths_Two.map((_, index) => (
						<ProjectItem imagePath={_} key={index} />
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
}

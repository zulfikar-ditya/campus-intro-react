import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function ProjectItem({ imagePath }: { imagePath: string }) {
	return (
		<CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-4">
			<div className="">
				<Card className="bg-slate-400 p-10">
					<CardContent className="bg-slate-600 p-0 overflow-hidden relative aspect-video">
						<Image
							src={imagePath}
							alt="Project"
							className="object-cover"
							width={800}
							height={600}
						/>
					</CardContent>
				</Card>
			</div>
		</CarouselItem>
	);
}

"use client"

import React from "react"
import { BreadCrumb } from "@/shared/components/shared"
import Image from "next/image"
import {
	Container,
	DescriptionShoes,
	ChooesSizes,
	WarrantyInfo,
	AddToCard,
} from "@/shared/components/shared"
import { Shoes } from "@/lib/generated/prisma"
import { useCarousel } from "@/shared/hooks"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
	className?: string
	shoes: Shoes
}

export const ChooseShoes: React.FC<Props> = ({ shoes }) => {
	const {
		currentImage,
		setCurrentImage,
		handleImageChange,
		thumbsRef,
		imageContainerRef,
	} = useCarousel(shoes.imagesUrl)

	return (
		<Container className="px-40 pt-5">
			<div className="flex flex-col items-center">
				<div className="flex flex-col">
					<BreadCrumb shoes={shoes} />
					<div className="flex gap-10 pt-4">
						<div className="relative w-172.5 h-130 overflow-hidden rounded-lg">
							<div
								ref={imageContainerRef}
								className="relative w-full h-110 overflow-hidden group cursor-pointer select-none"
							>
								<Image
									className="object-cover transition-opacity duration-300"
									src={shoes.imagesUrl[currentImage]}
									loading="eager"
									fill
									alt={shoes.slug}
								/>
								<button
									onClick={() => handleImageChange("prev")}
									className="rounded-md absolute left-3 top-1/2 -translate-y-1/2 bg-background/50 text-foreground p-2 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer"
								>
									<ChevronLeft size={20} />
								</button>
								<button
									onClick={() => handleImageChange("next")}
									className="rounded-md absolute right-3 top-1/2 -translate-y-1/2 bg-background/50 text-foreground p-2 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer"
								>
									<ChevronRight size={20} />
								</button>
							</div>
						</div>
						<div className="flex flex-col bg-accent/80 p-6 rounded-lg">
							<div>
								<div className="flex items-center justify-between mb-1">
									<p className="text-2xl font-bold">{shoes.name}</p>
									<p className="text-foreground/50 text-xl font-bold">
										{shoes.color}
									</p>
								</div>
								<p className="text-lg mb-2">{shoes.price} ₽</p>
								<ChooesSizes shoes={shoes} />
								<AddToCard />
								<div className="flex justify-between mb-5 pt-6">
									{shoes.imagesUrl.map((url, index) => (
										<div
											key={index}
											className={cn(
												"relative w-40 h-30 rounded-md overflow-hidden shrink-0 cursor-pointer border transition",
												currentImage === index
													? "border-background"
													: "border-transparent"
											)}
											onClick={() => {
												setCurrentImage(index)
												thumbsRef.current?.children[index]?.scrollIntoView({
													behavior: "smooth",
													inline: "center",
												})
											}}
										>
											<Image
												src={url}
												alt={`${shoes.slug}-${index}`}
												fill
												loading="lazy"
												className="object-cover"
											/>
											<div
												className={cn(
													"absolute inset-0 bg-black/60 transition-opacity duration-300",
													currentImage === index ? "opacity-0" : "opacity-50"
												)}
											/>
										</div>
									))}
								</div>
							</div>
							<WarrantyInfo />
						</div>
					</div>
				</div>
			</div>
			<DescriptionShoes shoes={shoes} />
			<p className="pt-40">Может быть интересно</p>
		</Container>
	)
}

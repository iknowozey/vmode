"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useShoes } from "@/shared/hooks"
import { ScrollToTopWrapper } from "./scroll-to-top-wrapper"
import { Skeleton } from "../ui"
import { ArrowRight } from "lucide-react"

interface Props {
	className?: string
	columns?: number
}

export const SectionShoes: React.FC<Props> = ({ className }) => {
	const { shoes, loading } = useShoes()

	return (
		<>
			<div className={cn("flex justify-center relative z-0 py-10", className)}>
				<div className="grid grid-cols-5 gap-8">
					{loading
						? Array.from({ length: 20 }).map((_, index) => (
								<div
									key={index}
									className="flex flex-col items-center w-55 h-55 gap-2.5"
								>
									<div className="relative w-55 h-45 overflow-hidden">
										<Skeleton className="w-full h-full" />
									</div>
									<Skeleton className="w-32 h-2" />
									<Skeleton className="w-20 h-1.5" />
								</div>
						  ))
						: shoes.map(shoes => (
								<Link
									key={shoes.id}
									href={`/shoes/${shoes.slug}`}
									className="group flex flex-col items-center w-55 h-55 transition-transform duration-500 hover:scale-103"
								>
									<div className="relative w-55 h-45 overflow-hidden rounded-lg">
										<Image
											className="w-full h-full"
											src={shoes.imagesUrl[0]}
											loading="lazy"
											fill
											alt={shoes.slug}
										/>
										<div className="absolute top-3 right-3 p-1 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											<ArrowRight
												size={16}
												className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500"
												strokeWidth={1.5}
											/>
										</div>
									</div>
									<p className="text-xs pt-2">{shoes.name}</p>
									<p className="text-xs pt-1">{shoes.price} ₽</p>
								</Link>
						  ))}
				</div>
				<ScrollToTopWrapper />
			</div>
		</>
	)
}

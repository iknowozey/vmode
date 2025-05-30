"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useFilteredShoes, useShoes } from "@/shared/hooks"
import { ScrollToTopWrapper } from "./scroll-to-top-wrapper"
import { Skeleton } from "../ui"
import { ArrowRight } from "lucide-react"
import { FilterSelections } from "@/@types/filters"

interface Props {
	className?: string
	columns?: number
	appliedFilters?: FilterSelections
}

export const SectionShoes: React.FC<Props> = ({
	className,
	columns = 5,
	appliedFilters,
}) => {
	const { shoes: allShoes, loading } = useShoes()
	const filteredShoes = useFilteredShoes(allShoes, appliedFilters)

	return (
		<>
			<div className={cn("flex justify-center relative z-0 pt-10", className)}>
				<div
					className={cn(
						"grid gap-8",
						columns === 4 ? "grid-cols-4" : "grid-cols-5"
					)}
				>
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
						: filteredShoes.map(shoe => (
								<Link
									key={shoe.id}
									href={`/shoes/${shoe.slug}`}
									className="group flex flex-col items-center w-55 h-55 transition-transform duration-500 hover:scale-103"
								>
									<div className="relative w-55 h-45 overflow-hidden rounded-lg">
										<Image
											className="w-full h-full object-cover"
											src={shoe.imagesUrl[0]}
											loading="lazy"
											fill
											alt={shoe.slug}
										/>
										<div className="absolute top-3 right-3 p-1 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											<ArrowRight
												size={16}
												className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500"
												strokeWidth={1.5}
											/>
										</div>
									</div>
									<p className="text-xs pt-2">{shoe.name}</p>
									<p className="text-xs pt-1">{shoe.price} ₽</p>
								</Link>
						  ))}
				</div>
				<ScrollToTopWrapper />
			</div>
		</>
	)
}

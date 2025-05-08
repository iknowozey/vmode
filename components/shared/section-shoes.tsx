"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Shoes } from "@/lib/generated/prisma"
import { Api } from "@/services/api-client"

interface Props {
	className?: string
	columns?: number
	sex?: string
}

export const SectionShoes: React.FC<Props> = ({ className }) => {
	const [shoes, setShoes] = React.useState<Shoes[]>([])

	React.useEffect(() => {
		async function fetchShoes() {
			try {
				const result = await Api.shoes.getAll()
				setShoes(result)
			} catch (e) {
				console.error(e)
			}
		}
		fetchShoes()
	}, [])
	return (
		<>
			<div className={cn("flex justify-center relative z-0 py-10", className)}>
				<div className="grid grid-cols-5 gap-8">
					{shoes.map(shoes => (
						<Link
							key={shoes.id}
							href={`/shoes/${shoes.slug}`}
							className="flex flex-col items-center w-55 h-55 transition-transform duration-500 hover:scale-103"
						>
							<div className="relative w-55 h-45 overflow-hidden rounded-lg">
								<Image
									className="w-full h-full"
									src={shoes.imagesUrl[0]}
									loading="lazy"
									fill
									alt={shoes.slug}
								/>
							</div>
							<p className="text-xs pt-2">{shoes.name}</p>
							<p className="text-xs pt-1">{shoes.price} ₽</p>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

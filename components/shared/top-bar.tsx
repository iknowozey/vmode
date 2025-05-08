import React from "react"
import { Container } from "./container"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface Props {
	className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
	const categories = [
		{
			name: "Бренды",
			href: "/brands",
		},
		{
			name: "Мужское",
			href: "/men",
		},
		{
			name: "Женское",
			href: "/women",
		},
		{
			name: "Цвет",
			href: "/children",
		},
		{
			name: "Сезон",
			href: "/season",
		},
	]

	return (
		<div
			className={cn("w-full border-y border-dashed sticky top-17", className)}
		>
			<Container>
				<div className="flex justify-center items-center gap-12">
					{categories.map(({ name, href }, index) => (
						<div
							key={index}
							className="flex items-center justify-center w-37.5 py-3.5 group"
						>
							<Link href={href} className="flex items-center gap-1">
								<p className="text-xs">{name}</p>
								<ChevronRight
									size={13}
									className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
								/>
							</Link>
						</div>
					))}
				</div>
			</Container>
		</div>
	)
}

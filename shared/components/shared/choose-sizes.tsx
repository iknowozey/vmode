"use client"

import React from "react"
import { Button } from "../ui"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Shoes } from "@/lib/generated/prisma"

interface Props {
	shoes: Shoes
	className?: string
}

export const ChooesSizes: React.FC<Props> = ({ shoes, className }) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [selectedSize, setSelectedSize] = React.useState<number | null>(null)
	const [activeSizeSystem, setActiveSizeSystem] = React.useState<"RUS" | "EU">(
		"RUS"
	)
	const sizes = activeSizeSystem === "RUS" ? shoes.sizesRUS : shoes.sizesEU

	return (
		<div className="relative">
			<Button
				onClick={() => setIsOpen(prev => !prev)}
				className={cn(
					"flex items-center justify-between px-4 border border-foreground w-full h-12 rounded-lg mb-4 font-normal",
					className
				)}
				variant="outline"
			>
				<p className="text-sm">Размер</p>
				<div className="flex items-center gap-1">
					{selectedSize !== null ? `${activeSizeSystem} ${selectedSize}` : ""}
					<ChevronDown size={16} />
				</div>
			</Button>

			<div
				className={cn(
					"absolute top-full mt-1 left-0 w-full rounded-md py-2 px-2 z-20 transition-all duration-300 bg-accent/85 backdrop-blur-sm border",
					isOpen ? "visible opacity-100" : "invisible opacity-0"
				)}
			>
				<div className="flex mb-2 gap-0.5">
					<Button
						className={cn("w-1/2 h-10 rounded-sm font-normal")}
						variant={activeSizeSystem === "RUS" ? "default" : "outline"}
						onClick={() => setActiveSizeSystem("RUS")}
					>
						RUS
					</Button>
					<Button
						className={cn("w-1/2 h-10 rounded-sm font-normal")}
						variant={activeSizeSystem === "EU" ? "default" : "outline"}
						onClick={() => setActiveSizeSystem("EU")}
					>
						EU
					</Button>
				</div>
				<div className="grid grid-cols-5 gap-3 px-6 py-3">
					{sizes.map(size => (
						<Button
							key={size}
							className="w-full h-12 font-normal rounded-sm"
							variant={selectedSize === size ? "default" : "outline"}
							onClick={() => {
								setSelectedSize(size)
								setIsOpen(false)
							}}
						>
							{size}
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}

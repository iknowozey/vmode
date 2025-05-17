"use client"

import React from "react"
import { Button } from "../ui"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
	className?: string
}

export const ChooesSizes: React.FC<Props> = ({ className }) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [selectedSizeType, setSelectedSizeType] = React.useState<"RUS" | "EU">(
		"RUS"
	)
	const [selectedSize, setSelectedSize] = React.useState<{
		rus: string
		eu: string
	} | null>(null)
	const [sizes, setSizes] = React.useState([
		{ rus: "31", eu: "32" },
		{ rus: "32", eu: "33" },
		{ rus: "33", eu: "34" },
		{ rus: "34", eu: "35" },
		{ rus: "35", eu: "36" },
		{ rus: "36", eu: "37" },
		{ rus: "37", eu: "38" },
		{ rus: "38", eu: "39" },
		{ rus: "39", eu: "40" },
		{ rus: "40", eu: "41" },
		{ rus: "41", eu: "42" },
		{ rus: "42", eu: "43" },
		{ rus: "43", eu: "44" },
		{ rus: "44", eu: "45" },
		{ rus: "45", eu: "46" },
		{ rus: "46", eu: "47" },
	])

	return (
		<div className="relative">
			<Button
				onClick={() => setIsOpen(prev => !prev)}
				className={cn(
					"flex items-center justify-between px-4 border border-foreground w-full h-12 rounded-lg mb-2 font-normal",
					className
				)}
				variant="outline"
			>
				<p className="text-sm">Размер</p>
				<div className="flex items-center gap-1">
					<p>RUS</p>
					<ChevronDown size={16} />
				</div>
			</Button>
			<div
				className={cn(
					"absolute top-full mt-2 left-0  w-full rounded-md py-2 px-2 z-20 transition-all duration-300 bg-accent/85 backdrop-blur-sm border border- ",
					isOpen ? "visible opacity-100" : "invisible opacity-0"
				)}
			>
				<div className="flex mb-2 gap-0.5">
					<Button className={cn("w-1/2 h-10 rounded-sm font-normal")}>
						RUS
					</Button>
					<Button
						className={cn("w-1/2 h-10 rounded-sm font-normal")}
						variant="outline"
					>
						EU
					</Button>
				</div>
				<div className="grid grid-cols-5 gap-3 px-6 py-3">
					{sizes.map((size, index) => (
						<Button
							key={index}
							className="w-full h-12 font-normal text-xs line-clamp-none rounded-sm"
							variant="outline"
						>
							{selectedSizeType === "RUS" ? size.rus : size.eu}
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}

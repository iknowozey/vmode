"use client"

import { ArrowUp } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"

interface ScrollToTopButtonProps {
	show: boolean
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
	show,
}) => {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	return (
		<button
			onClick={handleClick}
			className={cn(
				"fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer hover:bg-foreground/70",
				show
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 translate-y-6 pointer-events-none"
			)}
			aria-label="Scroll to top"
		>
			<ArrowUp size={20} />
		</button>
	)
}

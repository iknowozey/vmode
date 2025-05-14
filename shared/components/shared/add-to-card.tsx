import React from "react"
import { Button } from "../ui"
import { cn } from "@/lib/utils"

interface Props {
	className?: string
}

export const AddToCard: React.FC<Props> = ({ className }) => {
	return (
		<Button className={cn("w-full h-13", className)} variant="gradient">
			Добавить в корзину
		</Button>
	)
}

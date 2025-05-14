import React from "react"
import { Button } from "../ui"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
	className?: string
}

export const ChooesSizes: React.FC<Props> = ({ className }) => {
	return (
		<Button
			className={cn(
				"flex items-center justify-between px-4 border border-foreground w-full h-12 rounded-lg mb-4 font-normal",
				className
			)}
			variant="outline"
		>
			<p className="text-sm">Размер</p>
			<div className="flex items-center gap-1">
				<p>RUS 38</p>
				<ChevronDown size={16} />
			</div>
		</Button>
	)
}

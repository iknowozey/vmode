import React from "react"
import { Plus, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Props {
	className?: string
}

export const CartShoesItem: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex items-center justify-between", className)}>
			<div className="flex">
				<div className="relative w-42.5 h-37.5 mr-5">
					<Image
						className="object-cover transition-opacity duration-300  rounded-lg"
						src="/shoes/adidas-campus/main.jpg"
						loading="eager"
						fill
						alt="Кроссовки"
					/>
				</div>
				<div className="">
					<p className="font-bold text-xl">Adidas Campus</p>
					<p className="mb-3">Размер: RU 38</p>
					<p className="text-xl">15000 ₽</p>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<div className="flex items-center justify-center w-7.5 h-7.5 border border-foreground/50 rounded-lg cursor-pointer">
					<X size={17} strokeWidth={1} />
				</div>
				<p className="text-xl">1</p>
				<div className="flex items-center justify-center w-7.5 h-7.5 border border-foreground/50 rounded-lg cursor-pointer">
					<Plus size={17} strokeWidth={1} />
				</div>
			</div>
		</div>
	)
}

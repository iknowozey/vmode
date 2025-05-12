"use client"

import { Button, Dialog } from "@/components/ui"
import { Shoes } from "@/lib/generated/prisma"
import { cn } from "@/lib/utils"
import React from "react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { WarrantyInfo } from "../warranty-info"

interface Props {
	className?: string
	shoes: Shoes
}

export const ChooseShoes: React.FC<Props> = ({ shoes, className }) => {
	const router = useRouter()
	return (
		<Dialog open={Boolean(shoes)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"min-w-[1160px] min-h-[580px] overflow-hidden bg-background/85 backdrop-blur-sm",
					className
				)}
			>
				<VisuallyHidden>
					<DialogTitle>Информация о товаре</DialogTitle>
				</VisuallyHidden>
				<div className="flex">
					<div className="flex flex-col relative w-1/2 h-full">
						<div className="relative w-full h-110 overflow-hidden ">
							<Image
								className="w-full h-full"
								src={shoes.imagesUrl[0]}
								loading="lazy"
								fill
								alt={shoes.slug}
							/>
						</div>
						<div className="flex justify-center gap-4 pt-4">
							<div className="relative w-35 h-25 overflow-hidden rounded-lg">
								<Image
									className="w-full h-full"
									src={shoes.imagesUrl[0]}
									loading="lazy"
									fill
									alt={shoes.slug}
								/>
							</div>
							<div className="relative w-35 h-25 overflow-hidden rounded-lg">
								<Image
									className="w-full h-full"
									src={shoes.imagesUrl[1]}
									loading="lazy"
									fill
									alt={shoes.slug}
								/>
								<div className="absolute inset-0 bg-black/50"></div>
							</div>
							<div className="relative w-35 h-25 overflow-hidden rounded-lg">
								<Image
									className="w-full h-full"
									src={shoes.imagesUrl[2]}
									loading="lazy"
									fill
									alt={shoes.slug}
								/>
								<div className="absolute inset-0 bg-black/50"></div>
							</div>
						</div>
					</div>
					<div className="bg-foreground/10 w-1/2 h-full pt-12 px-12 pb-5.5">
						<div className="flex flex-col justify-between h-full">
							<div>
								<div className="flex items-center justify-between mb-4">
									<p className="text-3xl font-bold">{shoes.name}</p>
									<p className="text-foreground/50 text-xl font-bold">
										{shoes.color}
									</p>
								</div>
								<Button
									className="flex items-center justify-between px-4 border border-foreground w-full h-12 rounded-lg mb-4 font-normal"
									variant="outline"
								>
									<p className="text-sm">Размер</p>
									<div className="flex items-center gap-1">
										<p>RUS 38</p>
										<ChevronDown size={16} />
									</div>
								</Button>
								<p className="text-2xl mb-4">{shoes.price} ₽</p>
							</div>
							<div className="flex flex-col gap-6">
								<WarrantyInfo />
								<Button className="w-full h-10">
									Полная информация о модели
								</Button>
								<Button className="w-full h-15">Добавить в корзину</Button>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

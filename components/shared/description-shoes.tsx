import { Shoes } from "@/lib/generated/prisma"
import React from "react"

interface Props {
	shoes: Shoes
}

export const DescriptionShoes: React.FC<Props> = ({ shoes }) => {
	return (
		<>
			<div className="pt-10 mb-10">
				<p className="text-xl font-bold mb-5">Описание модели</p>
				<p className="text-sm leading-[130%]">{shoes.desc}</p>
			</div>
			<div>
				<p className="text-xl font-bold mb-5">Характеристики модели</p>
				<div className="text-sm">
					<p className="mb-3">Общее</p>
					<div className="flex items-center border-t w-full h-8">
						<p className="w-1/2 text-foreground/50">Пол</p>
						<p>{shoes.sex}</p>
					</div>
					<div className="flex items-center border-t w-full h-8">
						<p className="w-1/2 text-foreground/50">Вид спорта</p>
						<p>{shoes.activity}</p>
					</div>
					{shoes.season && (
						<div className="flex items-center border-t w-full h-8 mb-4">
							<p className="w-1/2 text-foreground/50">Сезон</p>
							<p>{shoes.season}</p>
						</div>
					)}
					<p className="mb-3">Дополнительно</p>
					{shoes.code && (
						<div className="flex items-center border-t w-full h-8">
							<p className="w-1/2 text-foreground/50">Код товара</p>
							<p>{shoes.code}</p>
						</div>
					)}
					{shoes.country && (
						<div className="flex items-center border-t w-full h-8">
							<p className="w-1/2 text-foreground/50">Страна производства</p>
							<p>{shoes.country}</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

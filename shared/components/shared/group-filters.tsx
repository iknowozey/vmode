"use client"

import React from "react"
import {
	FilterBrand,
	FilterColor,
	FilterPrice,
	FilterSeason,
	FilterSex,
} from "./filters"

interface Props {
	className?: string
}

export const GroupFilters: React.FC<Props> = ({ className }) => {
	const brands = [
		{
			brand: "Adidas",
		},
		{
			brand: "Reebok",
		},
		{
			brand: "Puma",
		},
		{
			brand: "Dior",
		},
		{
			brand: "Nike",
		},
		{
			brand: "New Balance",
		},
		{
			brand: "ASICS",
		},
		{
			brand: "Vans",
		},
		{
			brand: "Osiris",
		},
	]

	const sex = [
		{
			sex: "Мужской",
		},
		{
			sex: "Женский",
		},
		{
			sex: "Унисекс",
		},
	]

	const season = [
		{
			season: "Лето",
		},
		{
			season: "Зима",
		},
		{
			season: "Демисезон",
		},
	]

	const color = [
		{
			color: "Белый",
		},
		{
			color: "Серый",
		},
		{
			color: "Синий",
		},
		{
			color: "Черный",
		},
		{
			color: "Красный",
		},
		{
			color: "Розовый",
		},
	]

	return (
		<div className={className}>
			<div className="min-w-[235px]">
				<FilterBrand brands={brands} />
				<FilterSex sex={sex} />
				<FilterSeason season={season} />
				<FilterColor color={color} />
				<FilterPrice />
			</div>
		</div>
	)
}

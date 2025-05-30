import { useMemo } from "react"
import { FilterSelections } from "@/@types/filters"
import { Shoes } from "@/lib/generated/prisma"

/**
 * хук для фильтрации массива обуви по заданным критериям
 * @param allShoes все доступные кроссовки
 * @param appliedFilters примененные фильтры
 * @returns отфильтрованный массив кроссовок
 */

export const useFilteredShoes = (
	allShoes: Shoes[],
	appliedFilters?: FilterSelections
): Shoes[] => {
	return useMemo(() => {
		if (!appliedFilters) {
			return allShoes
		}

		let tempShoes = allShoes

		const selectedBrands = Object.keys(appliedFilters.brand || {}).filter(
			key => appliedFilters.brand[key]
		)
		if (selectedBrands.length > 0) {
			tempShoes = tempShoes.filter(
				shoe =>
					shoe.name &&
					selectedBrands.includes(shoe.name.split(" ")[0].toLowerCase())
			)
		}

		const selectedColors = Object.keys(appliedFilters.color || {}).filter(
			key => appliedFilters.color[key]
		)
		if (selectedColors.length > 0) {
			tempShoes = tempShoes.filter(
				shoe => shoe.color && selectedColors.includes(shoe.color.toLowerCase())
			)
		}

		const selectedSeasons = Object.keys(appliedFilters.season || {}).filter(
			key => appliedFilters.season[key]
		)
		if (selectedSeasons.length > 0) {
			tempShoes = tempShoes.filter(
				shoe =>
					shoe.season && selectedSeasons.includes(shoe.season.toLowerCase())
			)
		}

		const selectedSexes = Object.keys(appliedFilters.sex || {}).filter(
			key => appliedFilters.sex[key]
		)
		if (selectedSexes.length > 0) {
			tempShoes = tempShoes.filter(
				shoe => shoe.sex && selectedSexes.includes(shoe.sex.toLowerCase())
			)
		}

		const minPrice = appliedFilters.price?.min ?? 0
		const maxPrice = appliedFilters.price?.max ?? 100000
		tempShoes = tempShoes.filter(
			shoe => shoe.price >= minPrice && shoe.price <= maxPrice
		)

		return tempShoes
	}, [allShoes, appliedFilters])
}

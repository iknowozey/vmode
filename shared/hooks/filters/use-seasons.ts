import { useMemo } from "react"
import { useShoes } from "@/shared/hooks"
import { FilterItem } from "@/@types/filters"

const capitalize = (str: string): string => {
	return str
		.split(" ")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ")
}

export const useSeasons = (): FilterItem[] => {
	const { shoes } = useShoes()

	return useMemo(() => {
		const seasonSet = new Set<string>()
		shoes.forEach(shoe => {
			if (shoe.season) seasonSet.add(shoe.season.toLowerCase())
		})

		return Array.from(seasonSet)
			.sort((a, b) => a.localeCompare(b))
			.map(season => ({ id: season, name: capitalize(season) }))
	}, [shoes])
}

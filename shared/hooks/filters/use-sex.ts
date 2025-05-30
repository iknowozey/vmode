import { useMemo } from "react"
import { useShoes } from "@/shared/hooks"
import { FilterItem } from "@/@types/filters"

const capitalize = (str: string): string => {
	return str
		.split(" ")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ")
}

export const useSexes = (): FilterItem[] => {
	const { shoes } = useShoes()

	return useMemo(() => {
		const sexSet = new Set<string>()
		shoes.forEach(shoe => {
			if (shoe.sex) sexSet.add(shoe.sex.toLowerCase())
		})

		return Array.from(sexSet)
			.sort((a, b) => a.localeCompare(b))
			.map(sex => ({ id: sex, name: capitalize(sex) }))
	}, [shoes])
}

import { create } from "zustand"
import { FilterSelections, FilterType } from "@/@types/filters"

interface FilterState {
	selections: FilterSelections
	setSelections: (newSelections: FilterSelections) => void

	updateCheckboxFilter: (
		type: Exclude<FilterType, "price">,
		id: string,
		checked: boolean
	) => void

	updatePriceFilter: (min: number, max: number) => void

	resetFilters: () => void
}

const initialFilterSelections: FilterSelections = {
	brand: {},
	color: {},
	season: {},
	sex: {},
	price: { min: 0, max: 100000 },
}

export const useFilterStore = create<FilterState>(set => ({
	selections: initialFilterSelections,
	setSelections: newSelections => set({ selections: newSelections }),
	updateCheckboxFilter: (type, id, checked) =>
		set(state => ({
			selections: {
				...state.selections,
				[type]: {
					...state.selections[type],
					[id]: checked,
				},
			},
		})),

	updatePriceFilter: (min, max) =>
		set(state => ({
			selections: {
				...state.selections,
				price: { min, max },
			},
		})),

	resetFilters: () => set({ selections: initialFilterSelections }),
}))

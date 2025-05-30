export type FilterItem = {
	id: string
	name: string
}

export type FilterType = "brand" | "sex" | "price"

export type CheckboxSelections = Record<string, boolean>

export type PriceRange = {
	min: number
	max: number
}

export type FilterSelections = {
	brand: CheckboxSelections

	sex: CheckboxSelections
	price: PriceRange
}

export type CheckboxFilterProps = {
	type: Exclude<FilterType, "price">
	selectedItems: CheckboxSelections
}

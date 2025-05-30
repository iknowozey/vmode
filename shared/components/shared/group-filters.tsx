"use client"

import React from "react"
import { FilterType } from "@/@types/filters"
import { FilterAccordion } from "./filter-accordion"

import {
	useBrands,
	useColors,
	useSeasons,
	useSexes,
} from "@/shared/hooks/filters"
import { FilterPrice } from "./filter-price"
import { useFilterStore } from "@/shared/store/filter-store"

interface GroupFiltersProps {
	defaultOpenFilterType?: Exclude<FilterType, "price">
}

const GroupFilters: React.FC<GroupFiltersProps> = ({
	defaultOpenFilterType,
}) => {
	const { selections, updateCheckboxFilter, updatePriceFilter } =
		useFilterStore()

	const brands = useBrands()
	const colors = useColors()
	const seasons = useSeasons()
	const sexes = useSexes()

	const handleSelectionChange =
		(type: Exclude<FilterType, "price">) => (id: string, checked: boolean) => {
			updateCheckboxFilter(type, id, checked)
		}

	return (
		<div className="w-60 pt-10">
			<FilterAccordion
				type="brand"
				title="Бренд"
				items={brands}
				selectedItems={selections.brand}
				onSelectionChange={handleSelectionChange("brand")}
				withSearch
				defaultOpen={defaultOpenFilterType === "brand"}
			/>

			<FilterAccordion
				type="color"
				title="Цвет"
				items={colors}
				selectedItems={selections.color}
				onSelectionChange={handleSelectionChange("color")}
				defaultOpen={defaultOpenFilterType === "color"}
			/>

			<FilterAccordion
				type="season"
				title="Сезон"
				items={seasons}
				selectedItems={selections.season}
				onSelectionChange={handleSelectionChange("season")}
				defaultOpen={defaultOpenFilterType === "season"}
			/>

			<FilterAccordion
				type="sex"
				title="Пол"
				items={sexes}
				selectedItems={selections.sex}
				onSelectionChange={handleSelectionChange("sex")}
				defaultOpen={defaultOpenFilterType === "sex"}
			/>

			<FilterPrice
				value={[selections.price.min, selections.price.max]}
				onValueChange={value => updatePriceFilter(value[0], value[1])}
			/>
		</div>
	)
}

export default GroupFilters

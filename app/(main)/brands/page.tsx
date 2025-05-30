"use client"

import { cn } from "@/lib/utils"
import { Container } from "@/shared/components/shared"
import GroupFilters from "@/shared/components/shared/group-filters"
import { SectionShoes } from "@/shared/components/shared"
import React, { useEffect } from "react"
import { useFilterStore } from "@/shared/store/filter-store"

interface Props {
	className?: string
}

const BrandsPage: React.FC<Props> = ({ className }) => {
	const { selections, setSelections } = useFilterStore()

	useEffect(() => {
		const defaultBrandsFilter = {
			brand: {},
			color: {},
			season: {},
			sex: {},
			price: { min: 0, max: 100000 },
		}
		setSelections(defaultBrandsFilter)
	}, [setSelections])

	return (
		<Container className={cn("", className)}>
			<div className="flex justify-between gap-10 px-10">
				<GroupFilters defaultOpenFilterType="brand" />
				<SectionShoes appliedFilters={selections} />
			</div>
		</Container>
	)
}

export default BrandsPage

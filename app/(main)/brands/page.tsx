import { cn } from "@/lib/utils"
import {
	Container,
	GroupFilters,
	SectionShoes,
} from "@/shared/components/shared"
import React from "react"

interface Props {
	className?: string
}

const BrandsPage: React.FC<Props> = ({ className }) => {
	return (
		<Container className={cn("", className)}>
			<div className="flex justify-between gap-10 px-10">
				<GroupFilters className="pt-10" />
				<SectionShoes/>
			</div>
		</Container>
	)
}

export default BrandsPage

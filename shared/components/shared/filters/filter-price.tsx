import React from "react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../ui/accordion"
import { RangeSlider } from "../range-slider"

interface Props {
	className?: string
}

export const FilterPrice: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Цена</AccordionTrigger>
					<AccordionContent>
						<RangeSlider
							min={0}
							max={50000}
							step={100}
							value={[0, 50000]}
							className="pt-4"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

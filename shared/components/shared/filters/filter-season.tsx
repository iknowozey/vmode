import React from "react"
import { Checkbox } from "@/shared/components/ui/checkbox"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../ui/accordion"

interface Props {
	className?: string
	season: string
}

export const FilterSeason: React.FC<Props> = ({ className, season }) => {
	return (
		<div className={className}>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Сезон</AccordionTrigger>
					<div className="max-h-[210px] overflow-auto">
						<AccordionContent>
							{season.map((item, index) => (
								<div className="flex items-center space-x-2 py-1" key={index}>
									<Checkbox id={item.season} />
									<label
										htmlFor={item.season}
										className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
									>
										{item.season}
									</label>
								</div>
							))}
						</AccordionContent>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

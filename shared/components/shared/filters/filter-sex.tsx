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
	sex: string
}

export const FilterSex: React.FC<Props> = ({ className, sex }) => {
	return (
		<div className={className}>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Пол</AccordionTrigger>
					<div className="max-h-[210px] overflow-auto">
						<AccordionContent>
							{sex.map((item, index) => (
								<div className="flex items-center space-x-2 py-1" key={index}>
									<Checkbox id={item.sex} />
									<label
										htmlFor={item.sex}
										className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
									>
										{item.sex}
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

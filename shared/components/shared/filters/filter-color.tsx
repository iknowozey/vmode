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
	color: string
}

export const FilterColor: React.FC<Props> = ({ className, color }) => {
	return (
		<div className={className}>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Цвет</AccordionTrigger>
					<div className="max-h-[210px] overflow-auto">
						<AccordionContent>
							{color.map((item, index) => (
								<div className="flex items-center space-x-2 py-1" key={index}>
									<Checkbox id={item.color} />
									<label
										htmlFor={item.color}
										className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
									>
										{item.color}
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

import React from "react"
import { Checkbox } from "@/shared/components/ui/checkbox"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../ui/accordion"
import { cn } from "@/lib/utils"
import { Input } from "../../ui"

interface Props {
	className?: string
	brands: string
}

export const FilterBrand: React.FC<Props> = ({ className, brands }) => {
	return (
		<div className={cn("", className)}>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Бренд</AccordionTrigger>
					<div className="max-h-[210px] overflow-auto">
						<AccordionContent>
							<Input
								className="mb-2 max-w-[220px] h-8"
								placeholder="Найти бренд"
							/>
							{brands.map((item, index) => (
								<div className="flex items-center space-x-2 py-1" key={index}>
									<Checkbox id={item.brand} />
									<label
										htmlFor={item.brand}
										className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
									>
										{item.brand}
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

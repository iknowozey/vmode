import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import {RangeSlider} from "./range-slider"

interface Props {
  value: [number, number]
  onValueChange: (value: number[]) => void
  className?: string
}

export const FilterPrice: React.FC<Props> = ({
                                               value,
                                               onValueChange,
                                               className,
                                             }) => {
  return (
    <div className={className}>
      <Accordion
        type="single"
        collapsible
      >
        <AccordionItem value="price">
          <AccordionTrigger>Цена</AccordionTrigger>
          <AccordionContent>
            <RangeSlider
              min={0}
              max={50000}
              step={100}
              value={value}
              onValueChange={onValueChange}
              className="pt-4"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

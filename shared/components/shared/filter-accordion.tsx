"use client"

import React from "react"
import {Checkbox} from "@/shared/components/ui/checkbox"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import {cn} from "@/lib/utils"
import {Input} from "../ui"
import {CheckboxSelections, FilterItem, FilterType} from "@/@types/filters"

export type FilterAccordionProps = {
  type: Exclude<FilterType, "price">
  title: string
  items: FilterItem[]
  selectedItems: CheckboxSelections
  onSelectionChange: (id: string, checked: boolean) => void
  className?: string
  withSearch?: boolean
  defaultOpen?: boolean
}

export const FilterAccordion: React.FC<FilterAccordionProps> = ({
                                                                  type,
                                                                  title,
                                                                  items,
                                                                  selectedItems,
                                                                  onSelectionChange,
                                                                  className,
                                                                  withSearch = false,
                                                                  defaultOpen = false,
                                                                }) => {
  const [searchTerm, setSearchTerm] = React.useState("")

  const [accordionValue, setAccordionValue] = React.useState<
    string | undefined
  >(defaultOpen ? type : undefined)

  React.useEffect(() => {
    setAccordionValue(defaultOpen ? type : undefined)
  }, [defaultOpen, type])

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={cn("", className)}>
      <Accordion
        type="single"
        collapsible
        value={accordionValue}
        onValueChange={value => setAccordionValue(value)}
      >
        <AccordionItem value={type}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <div className="max-h-[210px] overflow-auto">
            <AccordionContent>
              {withSearch && (
                <Input
                  className="mb-2 max-w-[240px] h-8"
                  placeholder={`Найти ${title.toLowerCase()}`}
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              )}
              {filteredItems.map(item => (
                <div
                  className="flex items-center space-x-2 py-1"
                  key={item.id}
                >
                  <Checkbox
                    id={`${type}-${item.id}`}
                    checked={selectedItems[item.id] || false}
                    onCheckedChange={checked =>
                      onSelectionChange(item.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`${type}-${item.id}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {item.name}
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

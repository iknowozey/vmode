"use client"

import React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import {cn} from "@/lib/utils"

type SliderProps = {
  className?: string
  min: number
  max: number
  step: number
  formatLabel?: (value: number) => string
  value?: number[] | readonly number[]
  onValueChange?: (values: number[]) => void
}

const RangeSlider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      ...props
    }: SliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max]
    const [localValues, setLocalValues] = React.useState(initialValue)

    React.useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max])
    }, [min, max, value])

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues)
      if (onValueChange) {
        onValueChange(newValues)
      }
    }

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-[200px] mb-10 touch-none select-none items-center mx-auto",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <React.Fragment key={index}>
            <SliderPrimitive.Thumb className="relative block h-4 w-4 rounded-full border border-foreground bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
              <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 transform whitespace-nowrap text-center">
								<span className="text-xs text-foreground">
									{formatLabel ? formatLabel(value) : value}
								</span>
              </div>
            </SliderPrimitive.Thumb>
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    )
  }
)

RangeSlider.displayName = SliderPrimitive.Root.displayName

export {RangeSlider}

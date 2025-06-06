import {useMemo} from "react"
import {useShoes} from "@/shared/hooks"
import {FilterItem} from "@/@types/filters"

const capitalize = (str: string): string => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const useColors = (): FilterItem[] => {
  const {shoes} = useShoes()

  return useMemo(() => {
    const colorSet = new Set<string>()
    shoes.forEach(shoe => {
      if (shoe.color) colorSet.add(shoe.color.toLowerCase())
    })

    return Array.from(colorSet)
      .sort((a, b) => a.localeCompare(b))
      .map(color => ({id: color, name: capitalize(color)}))
  }, [shoes])
}

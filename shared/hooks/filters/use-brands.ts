import {useMemo} from "react"
import {useShoes} from "@/shared/hooks"
import {FilterItem} from "@/@types/filters"

const MULTI_WORD_BRANDS = new Set(["new balance"])

export const extractBrand = (name: string): string => {
  if (!name) return "other"
  const lowerName = name.toLowerCase()

  for (const brand of Array.from(MULTI_WORD_BRANDS)) {
    if (lowerName.startsWith(brand)) return brand
  }
  return name.split(" ")[0].toLowerCase()
}

const capitalize = (str: string): string => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const useBrands = (): FilterItem[] => {
  const {shoes} = useShoes()

  return useMemo(() => {
    const brandSet = new Set<string>()
    shoes.forEach(shoe => brandSet.add(extractBrand(shoe.name)))

    return Array.from(brandSet)
      .sort((a, b) => a.localeCompare(b))
      .map(brand => ({id: brand, name: capitalize(brand)}))
  }, [shoes])
}

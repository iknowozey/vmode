"use client"

import {cn} from "@/lib/utils"
import {Container} from "@/shared/components/shared"
import GroupFilters from "@/shared/components/shared/group-filters"
import {SectionShoes} from "@/shared/components/shared"
import React, {useEffect} from "react"
import {FilterSelections} from "@/@types/filters"
import {useFilterStore} from "@/shared/store/filter-store"

const ManPage: React.FC = () => {
  const {selections, setSelections} = useFilterStore()

  useEffect(() => {
    const initialManFilters: FilterSelections = {
      brand: {},
      color: {},
      season: {},
      sex: {мужской: true},
      price: {min: 0, max: 100000},
    }
    setSelections(initialManFilters)
  }, [setSelections])

  return (
    <Container className={cn("")}>
      <div className="flex justify-between gap-10 px-10">
        <GroupFilters defaultOpenFilterType="sex" />
        <SectionShoes appliedFilters={selections} />
      </div>
    </Container>
  )
}

export default ManPage

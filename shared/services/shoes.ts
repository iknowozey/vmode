import {ApiRoutes} from "./constants"
import {axiosInstance} from "./axois"
import {Shoes} from "@/lib/generated/prisma"

export const search = async (query: string): Promise<Shoes[]> => {
  const {data} = await axiosInstance.get<Shoes[]>(ApiRoutes.SEARCH_SHOES, {
    params: {query},
  })

  return data
}

export const getAll = async (): Promise<Shoes[]> => {
  const {data} = await axiosInstance.get<Shoes[]>(ApiRoutes.SHOES)

  return data
}

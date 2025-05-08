import { ApiRoutes } from "./constants"
import { axiosInstance } from "./axois"
import { Shoes } from "@/lib/generated/prisma"

export const getAll = async (): Promise<Shoes[]> => {
	const { data } = await axiosInstance.get<Shoes[]>(ApiRoutes.SHOES)

	return data
}

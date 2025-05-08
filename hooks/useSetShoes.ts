import { Shoes } from "@/lib/generated/prisma"
import { Api } from "@/services/api-client"
import React from "react"

export const useSetShoes = () => {
	const [shoes, setShoes] = React.useState<Shoes[]>([])

	React.useEffect(() => {
		async function fetchShoes() {
			try {
				const result = await Api.shoes.getAll()
				setShoes(result)
			} catch (e) {
				console.error(e)
			}
		}
		fetchShoes()
	}, [])

	return { shoes }
}

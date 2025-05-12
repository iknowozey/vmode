import { Shoes } from "@/lib/generated/prisma"
import { Api } from "@/services/api-client"
import React from "react"

export const useShoes = () => {
	const [shoes, setShoes] = React.useState<Shoes[]>([])
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		async function fetchShoes() {
			try {
				const result = await Api.shoes.getAll()
				setShoes(result)
				setLoading(false)
			} catch (e) {
				console.error(e)
			}
		}
		fetchShoes()
	}, [])

	return { shoes, loading }
}
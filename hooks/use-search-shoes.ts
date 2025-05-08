import { Api } from "@/services/api-client"
import { Shoes } from "@/lib/generated/prisma"
import { useClickAway, useDebounce } from "react-use"
import React from "react"

export const useSearchShoes = () => {
	const [searchQuery, setSearchQuery] = React.useState("")
	const [shoes, setShoes] = React.useState<Shoes[]>([])
	const [focused, setFocused] = React.useState(false)

	const ref = React.useRef(null)

	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		async () => {
			try {
				const response = await Api.shoes.search(searchQuery)
				setShoes(response)
			} catch (e) {
				console.log(e)
			}
		},
		250,
		[searchQuery]
	)

	return { searchQuery, setSearchQuery, shoes, focused, setFocused, ref }
}

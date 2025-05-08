import React from "react"

export function useDebouncedScroll(callback: () => void, delay = 100) {
	React.useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null

		const handleScroll = () => {
			if (timeoutId) clearTimeout(timeoutId)
			timeoutId = setTimeout(callback, delay)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			if (timeoutId) clearTimeout(timeoutId)
		}
	}, [callback, delay])
}

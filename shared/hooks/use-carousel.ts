/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"

export function useCarousel(imagesUrl: string[]) {
	const [currentImage, setCurrentImage] = useState(0)
	const thumbsRef = useRef<HTMLDivElement>(null)
	const imageContainerRef = useRef<HTMLDivElement>(null)
	const timerRef = useRef<NodeJS.Timeout | null>(null)
	const isManuallyChanging = useRef(false)

	const nextImage = () => {
		setCurrentImage(prev => (prev + 1) % imagesUrl.length)
	}

	const handleImageChange = (dir: "prev" | "next") => {
		isManuallyChanging.current = true
		setCurrentImage(prev => {
			let nextIndex = dir === "prev" ? prev - 1 : prev + 1
			if (nextIndex < 0) nextIndex = imagesUrl.length - 1
			if (nextIndex >= imagesUrl.length) nextIndex = 0
			return nextIndex
		})
		setTimeout(() => {
			isManuallyChanging.current = false
		}, 300)
	}

	useEffect(() => {
		timerRef.current = setInterval(() => {
			if (!isManuallyChanging.current) {
				nextImage()
			}
		}, 5000)
		return () => {
			if (timerRef.current) clearInterval(timerRef.current)
		}
	}, [imagesUrl.length])

	useEffect(() => {
		const container = imageContainerRef.current
		if (!container) return

		let startX = 0
		let isDragging = false

		const handleMouseDown = (e: MouseEvent) => {
			startX = e.clientX
			isDragging = true
		}

		const handleMouseUp = (e: MouseEvent) => {
			if (!isDragging) return
			const endX = e.clientX
			const diff = endX - startX
			if (Math.abs(diff) > 50) {
				if (diff < 0) handleImageChange("next")
				else handleImageChange("prev")
			}
			isDragging = false
		}

		container.addEventListener("mousedown", handleMouseDown)
		document.addEventListener("mouseup", handleMouseUp)

		return () => {
			container.removeEventListener("mousedown", handleMouseDown)
			document.removeEventListener("mouseup", handleMouseUp)
		}
	}, [])

	return {
		currentImage,
		setCurrentImage,
		handleImageChange,
		thumbsRef,
		imageContainerRef,
	}
}

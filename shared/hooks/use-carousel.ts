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

	return {
		currentImage,
		setCurrentImage,
		handleImageChange,
		thumbsRef,
		imageContainerRef,
	}
}

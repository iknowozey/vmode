"use client"

import {useEffect, useState} from "react"
import {ScrollToTopButton} from "../ui"

export function ScrollToTopWrapper() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setShowScrollTop(window.scrollY > 200)
      }, 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return <ScrollToTopButton show={showScrollTop} />
}

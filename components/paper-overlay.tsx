/* eslint-disable react-hooks/set-state-in-effect */

"use client"

import { useEffect, useState } from "react"

export default function PaperOverlay() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const image = new window.Image()

    const handleLoad = () => setLoaded(true)

    image.onload = handleLoad
    image.onerror = handleLoad
    image.src = "/textures/washi.jpg"

    // Gambar mungkin sudah tersedia di cache browser.
    if (image.complete) {
      setLoaded(true)
    }

    return () => {
      image.onload = null
      image.onerror = null
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`paperOverlay pointer-events-none fixed inset-0 z-40 transition-opacity duration-700 ${
        loaded ? "opacity-30" : "opacity-0"
      }`}
    />
  )
}

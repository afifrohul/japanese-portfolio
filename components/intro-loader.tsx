"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import LoadingIndicator from "./loading-indicator"
import PaperOverlay from "./paper-overlay"

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(
      () => {
        setIsVisible(false)
      },
      shouldReduceMotion ? 800 : 2200
    )

    return () => window.clearTimeout(timer)
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0.15 : 0.7,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background text-foreground"
          aria-label="Loading portfolio"
          aria-live="polite"
        >
          <LoadingIndicator fullScreen={false} />
          <PaperOverlay />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

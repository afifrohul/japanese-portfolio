"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function SmoothCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springX = useSpring(cursorX, {
    stiffness: 150,
    damping: 20,
  })

  const springY = useSpring(cursorY, {
    stiffness: 150,
    damping: 20,
  })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX + 15)
      cursorY.set(e.clientY + 15)
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-9999 hidden w-fit rounded-full rounded-tl-md bg-accent px-3 py-1.5 lg:block"
      style={{
        translateX: springX,
        translateY: springY,
      }}
    >
      <p className="font-mono text-xs font-semibold text-background">
        {`Hi, I'm Afif`}
      </p>
    </motion.div>
  )
}
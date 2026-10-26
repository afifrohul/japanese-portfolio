"use client"

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { useEffect, useState } from "react"

export default function SmoothCursorDecoration() {
  const [isPositioned, setIsPositioned] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springX = useSpring(cursorX, {
    stiffness: 150,
    damping: 20,
  })

  const springY = useSpring(cursorY, {
    stiffness: 150,
    damping: 20,
  })

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      const x = event.clientX + 14
      const y = event.clientY + 19

      // Posisi pertama langsung ditetapkan tanpa animasi spring.
      if (!isPositioned) {
        cursorX.jump(x)
        cursorY.jump(y)
        springX.jump(x)
        springY.jump(y)

        setIsPositioned(true)
        return
      }

      // Gerakan berikutnya menggunakan spring animation.
      cursorX.set(x)
      cursorY.set(y)
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY, springX, springY, isPositioned])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-60 hidden w-fit rounded-full rounded-tl-md bg-accent px-3 py-1.5 lg:block border border-foreground/15"
      style={{
        x: springX,
        y: springY,
        visibility: isPositioned ? "visible" : "hidden",
      }}
    >
      <p className="font-mono text-xs font-semibold text-background">
        {`Hi, I'm Afif`}
      </p>
    </motion.div>
  )
}
import { getFrequencyBands } from "@/lib/audio"
import { useEffect, useRef } from "react"

const BAR_COUNT = 5

export default function Equaliser({ playing }: { playing: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const bars = Array.from(container.children) as HTMLElement[]

    let raf = 0

    const tick = () => {
      const { bass, mid, treble } = getFrequencyBands()

      // Setiap bar mengambil respons frekuensi berbeda.
      const values = Array.from({ length: BAR_COUNT }, (_, i) => {
        const position = i / (BAR_COUNT - 1)

        // Interpolasi sederhana dari bass ke mid lalu treble.
        if (position < 0.5) {
          const t = position * 2
          return bass * (1 - t) + mid * t
        }

        const t = (position - 0.5) * 2
        return mid * (1 - t) + treble * t
      })

      bars.forEach((bar, i) => {
        // Skala minimum menjaga bar tetap terlihat
        // meskipun audio sedang diam atau dijeda.
        const scale = playing
          ? Math.max(0.25, Math.min(1, values[i] * 2.5))
          : 0.25

        bar.style.transform = `scaleY(${scale})`
      })

      if (playing) {
        raf = requestAnimationFrame(tick)
      }
    }

    tick()

    return () => cancelAnimationFrame(raf)
  }, [playing])

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="flex h-3 items-center gap-0.5"
    >
      {Array.from({ length: BAR_COUNT }, (_, i) => (
        <span
          key={i}
          className="h-full w-px origin-center rounded-full bg-accent transition-transform duration-75 ease-out"
          style={{
            transform: "scaleY(0.25)",
          }}
        />
      ))}
    </span>
  )
}

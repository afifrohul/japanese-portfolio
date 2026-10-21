import { getFrequencyBands } from "@/lib/audio"
import { useEffect, useRef } from "react"

export default function Equaliser({ playing }: { playing: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const bars = ref.current
      ? (Array.from(ref.current.children) as HTMLElement[])
      : []

    const setBars = (values: number[]) => {
      bars.forEach((bar, i) => {
        bar.style.transform = `scaleY(${values[i] ?? 0.22})`
      })
    }

    let raf = 0
    const tick = () => {
      const { bass, mid, treble } = getFrequencyBands()
      setBars(
        [bass, mid, treble].map((value) =>
          Math.max(0.18, Math.min(1, value * 2.2))
        )
      )
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="flex h-2 shrink-0 items-end gap-0.75"
    >
      {[0, 1, 2].map((bar) => (
        <span
          key={bar}
          className="h-full w-px origin-bottom bg-accent transition-transform duration-75 ease-out"
          style={{ transform: "scaleY(0.22)" }}
        />
      ))}
    </span>
  )
}
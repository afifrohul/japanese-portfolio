"use client"

import { useEffect, useState } from "react"
import { Separator } from "./ui/separator"
import SmoothCursor from "./smooth-cursor-decoration"
import { AudioPlayer } from "./audio/audio-player"
import StampBrand from "./brand/stamp"
import { MousePointer2, MousePointer2Off } from "lucide-react"

export default function Header() {
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")
    return `${hours}.${minutes}.${seconds}`
  }

  return (
    <>
      {isCursorEnabled && <SmoothCursor />}

      <div className="">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <StampBrand content="静" classname="text-base" />
            <p className="font-mono text-xs font-semibold tracking-widest md:text-sm">
              AFIF
            </p>
          </div>
          <AudioPlayer />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCursorEnabled((prev) => !prev)}
              aria-label={
                isCursorEnabled
                  ? "Disable custom cursor"
                  : "Enable custom cursor"
              }
              aria-pressed={isCursorEnabled}
              title={
                isCursorEnabled
                  ? "Disable custom cursor"
                  : "Enable custom cursor"
              }
              className={`flex hidden items-center gap-2 p-2 text-xs tracking-widest transition-colors duration-150 hover:bg-accent-background hover:text-accent lg:block ${
                isCursorEnabled ? "bg-accent-background text-accent" : ""
              }`}
            >
              {isCursorEnabled ? (
                <MousePointer2 className="h-4 w-4" />
              ) : (
                <MousePointer2Off className="h-4 w-4" />
              )}
            </button>
            <Separator className="hidden lg:block" orientation="vertical" />
            <div className="border px-1 py-2">
              <p className="font-mono text-xs text-muted-foreground">
                {formatTime(time)} (UTC +07.00)
              </p>
            </div>
          </div>
        </div>

        <Separator />
      </div>
    </>
  )
}

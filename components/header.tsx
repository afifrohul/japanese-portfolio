"use client"

import { useState } from "react"
import { Separator } from "./ui/separator"
import { LuGithub, LuLinkedin } from "react-icons/lu"
import SmoothCursor from "./smooth-cursor-decoration"
import { AudioPlayer } from "./audio/audio-player"
import StampBrand from "./brand/stamp"
import { MousePointer2, MousePointer2Off } from "lucide-react"

export default function Header() {
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)

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
                <MousePointer2 className="w-4 h-4" />
              ) : (
                <MousePointer2Off className="w-4 h-4" />
              )}
            </button>

            <Separator orientation="vertical" />

            <a
              href="https://www.linkedin.com/in/afifrohul/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest transition-colors duration-150 hover:bg-accent-background hover:text-accent"
            >
              <LuLinkedin />
              <span className="hidden md:block">LINKEDIN</span>
            </a>

            <a
              href="https://github.com/afifrohul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest transition-colors duration-150 hover:bg-accent-background hover:text-accent"
            >
              <LuGithub />
              <span className="hidden md:block">GITHUB</span>
            </a>
          </div>
        </div>

        <Separator />
      </div>
    </>
  )
}

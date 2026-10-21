"use client"

import { useState } from "react"
import { Separator } from "./ui/separator"
// import { ThinkingOrb } from "thinking-orbs"
import { LuGithub, LuLinkedin, LuMousePointer2 } from "react-icons/lu"
import SmoothCursor from "./smooth-cursor-decoration"
import { AudioPlayer } from "./audio/audio-player"
import StampBrand from "./brand/stamp"

export default function Header() {
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)

  return (
    <>
      {isCursorEnabled && <SmoothCursor />}

      <div className="">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            {/* <ThinkingOrb state="breathing" size={20} color="#b94232" /> */}
            <StampBrand content="静" classname="text-base"/>
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
              className={`flex hidden items-center gap-2 p-2 text-xs tracking-widest transition-colors duration-150 hover:bg-accent-foreground hover:text-accent lg:block ${
                isCursorEnabled ? "bg-accent-foreground text-accent" : ""
              }`}
            >
              <LuMousePointer2 />
            </button>

            <Separator orientation="vertical" />

            <a
              href="https://www.linkedin.com/in/afifrohul/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest transition-colors duration-150 hover:bg-accent-foreground hover:text-accent"
            >
              <LuLinkedin />
              <span className="hidden md:block">LINKEDIN</span>
            </a>

            <a
              href="https://github.com/afifrohul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest transition-colors duration-150 hover:bg-accent-foreground hover:text-accent"
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

"use client"

import { Separator } from "./ui/separator"
import { ThinkingOrb } from "thinking-orbs"
import { LuGithub, LuLinkedin } from "react-icons/lu"

export default function Header() {
  return (
    <div className="">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <ThinkingOrb state="breathing" size={20} color="#b94232" />
          <p className="text-xs font-semibold tracking-widest md:block md:text-sm">
            AFIFROHUL
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/afifrohul/"
            target="_blank"
            className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest duration-150 hover:bg-accent-foreground hover:text-accent"
          >
            <LuLinkedin />
            <p className="hidden md:block">LINKEDIN</p>
          </a>
          <a
            href="https://github.com/afifrohul"
            target="_blank"
            className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest duration-150 hover:bg-accent-foreground hover:text-accent"
          >
            <LuGithub />
            <p className="hidden md:block">GITHUB</p>
          </a>
        </div>
      </div>
      <Separator />
    </div>
  )
}

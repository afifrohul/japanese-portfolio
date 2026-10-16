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
          <p className="hidden text-sm font-semibold tracking-widest md:block">
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
            LINKEDIN
          </a>
          <a
            href="https://github.com/afifrohul"
            target="_blank"
            className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest duration-150 hover:bg-accent-foreground hover:text-accent"
          >
            <LuGithub />
            GITHUB
          </a>
        </div>
      </div>
      <Separator />
    </div>
  )
}

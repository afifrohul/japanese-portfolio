"use client"

import { noto_sans_jp } from "@/lib/font"
import { ThinkingOrb } from "thinking-orbs"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="p-4 md:px-24">
        <div className="space-y-32">
          <div className="w-fit space-y-2">
            <div className="w-fit bg-foreground p-6 text-background">
              <h1
                className={`${noto_sans_jp.className} text-6xl font-black tracking-tight`}
              >
                ポートフォリオ
              </h1>
            </div>
            <div className="flex w-full items-center gap-3">
              <ThinkingOrb state="solving" size={20} color="#b94232" />
              <p className="tracking-widest text-accent">PORTFOLIO</p>
              <div className="flex-1">
                <div className="h-px w-full bg-foreground" />
              </div>
            </div>
          </div>
          <div className="pl-16">
            <p className="font-medium tracking-widest text-accent">
              HI, AFIF HERE! WELCOME TO MY PERSONAL SPACE.
            </p>
          </div>
          <div className="space-y-2 pl-24">
            <p className="text-end font-serif font-semibold text-accent italic">
              [notes]
            </p>
            <p className="text-end">
              Indeed, with difficulty comes easiness. When you have finished
              (one good action), keep working hard (on another good actions).
              And place your hope only in your God!
            </p>
            <p className="text-end text-sm text-muted-foreground italic">
              Q.S. Al Insyirah (94:6-8)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import SideDecoration from "@/components/side-decoration"
import { noto_sans_jp } from "@/lib/font"
import Image from "next/image"
import { ThinkingOrb } from "thinking-orbs"

export default function Page() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="p-4 md:pr-12 md:pl-24">
          <div className="space-y-20">
            <div className="space-y-2">
              <div className="w-fit bg-foreground p-4 text-background md:p-6">
                <h1
                  className={`${noto_sans_jp.className} text-2xl font-black tracking-tight md:text-4xl lg:text-6xl`}
                >
                  ポートフォリオ
                </h1>
              </div>
              <div className="flex w-full items-center gap-3">
                <ThinkingOrb state="solving" size={20} color="#b94232" />
                <p className="tracking-widest text-accent">PORTFOLIO</p>
                <div className="flex-1">
                  <div className="h-px w-2/3 bg-foreground" />
                </div>
              </div>
            </div>
            <div className="pl-4 lg:pl-16">
              <p className="font-medium tracking-widest text-accent font-mono">
                HI, AFIF HERE! WELCOME TO MY PERSONAL SPACE.
              </p>
            </div>
            <div className="flex w-full justify-end">
              <div className="w-4/5 space-y-2 md:w-1/2">
                <p className="font-serif text-sm font-semibold text-accent italic lg:text-base">
                  [notes]
                </p>
                <p className="text-xs md:text-base">
                  Indeed, with difficulty comes easiness. When you have finished
                  (one good action), keep working hard (on another good
                  actions). And place your hope only in your God!
                </p>
                <p className="text-sm text-xs text-muted-foreground italic md:text-sm">
                  Q.S. Al Insyirah (94:6-8)
                </p>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src={"/assets/mountain-sun-main.png"}
                alt="image"
                width={550}
                height={550}
                loading="eager"
                className="absolute -top-20 -left-24 h-auto w-auto opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
      <SideDecoration page="ホーム" content="ウェブサイト開発者" />
    </div>
  )
}

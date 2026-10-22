"use client"

import SideDecoration from "@/components/side-decoration"
import { noto_sans_jp } from "@/lib/font"

export default function Page() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2">
              <div className="w-fit bg-foreground p-4 text-background md:p-6">
                <h1
                  className={`${noto_sans_jp.className} text-3xl font-black tracking-widest lg:text-6xl`}
                >
                  はじめまして
                </h1>
              </div>
            </div>
            <div className="mt-4">
              <p className="p-4 text-center font-mono font-medium tracking-widest text-accent">
                HI, AFIF HERE! WELCOME TO MY PERSONAL SPACE.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="space-y-2 px-4 md:w-1/2 md:p-0">
            <p className={`text-xs text-accent ${noto_sans_jp.className}`}>
              注 / note
            </p>
            <p className="text-xs">
              Indeed, with difficulty comes easiness. When you have finished
              (one good action), keep working hard (on another good actions).
              And place your hope only in your God!
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Q.S. Al Insyirah (94:6-8)
            </p>
          </div>
        </div>
      </div>
      <SideDecoration page="ホーム" content="ウェブサイト開発者" />
    </div>
  )
}

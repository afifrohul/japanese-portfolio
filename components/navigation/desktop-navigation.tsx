"use client"

import { Noto_Sans_JP } from "next/font/google"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { NAV_ITEMS } from "./navigation-menu"

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] })

export function DesktopNavigation() {
  const pathname = usePathname()

  return (
    <aside className="hidden border-r lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-between px-16 py-4">
        <div className="flex items-center gap-1.5">
          <div className="bg-accent px-2 py-1">
            <p
            className={`${noto_sans_jp.className} text-xl font-bold text-background`}
            >
              墨
            </p>
          </div>
          <p className="font-bold text-xl">
            sumi<span className="text-accent">.</span>
          </p>
        </div>
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`))

            return (
              <div key={item.href}>
                <Link href={item.href}>
                  <div
                    className={clsx(
                      "relative flex w-fit items-center gap-4",
                      "text-5xl font-black tracking-tight",
                      "transition-colors duration-300",
                      "after:absolute after:-bottom-2 after:left-0",
                      "after:h-0.75 after:w-full",
                      "after:origin-left after:scale-x-0",
                      "after:bg-accent",
                      "after:transition-transform after:duration-300",
                      "hover:after:scale-x-100",
                      !isActive && "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span>{item.title}</span>

                    {isActive && (
                      <span className="h-3 w-3 animate-spin bg-accent" />
                    )}
                  </div>
                </Link>
              </div>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="h-px w-full bg-accent" />
          </div>
          <p className={`${noto_sans_jp.className} text-lg font-medium`}>
            墨と朱
          </p>
        </div>
      </div>
    </aside>
  )
}

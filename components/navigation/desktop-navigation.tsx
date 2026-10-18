"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { NAV_ITEMS } from "./navigation-menu"
import StampBrand from "../brand/stamp"
import BlockBrand from "../brand/block"

export function DesktopNavigation() {
  const pathname = usePathname()

  return (
    <aside className="hidden border-r lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-between px-8 py-4">
        <BlockBrand content="墨" />
        <nav className="flex flex-col gap-4">
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
                      "text-4xl font-black tracking-tight",
                      "transition-colors duration-300",
                      "after:absolute after:-bottom-1 after:left-0",
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
                      <span className="h-2.5 w-2.5 animate-spin bg-accent" />
                    )}
                  </div>
                </Link>
              </div>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="h-px w-full bg-foreground" />
          </div>
          <StampBrand content="朱" />
        </div>
      </div>
    </aside>
  )
}

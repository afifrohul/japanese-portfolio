"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import clsx from "clsx"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NAV_ITEMS } from "./navigation-menu"
import InkBrand from "../brand/ink"
import VermilionBrand from "../brand/vermilion"

export function MobileNavigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-background lg:hidden">
      <div className="flex h-12 items-center justify-between px-4">
        <span className="text-sm font-medium">MENU</span>

        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-background">
            <div className="mx-4 my-12 flex h-full flex-col justify-between md:mx-10">
              <div className="flex flex-col gap-8">
                <InkBrand />
                <nav className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" &&
                        pathname.startsWith(`${item.href}/`))

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div
                          className={clsx(
                            "flex items-center gap-3 text-xl font-black",
                            !isActive &&
                              "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <span>{item.title}</span>

                          {isActive && (
                            <span className="h-2 w-2 animate-spin bg-accent" />
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-px w-full bg-foreground" />
                </div>
                <VermilionBrand />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

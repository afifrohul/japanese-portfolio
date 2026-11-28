"use client"

import { Separator } from "@/components/ui/separator"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  return pathname !== "/" ? (
    <footer className="mt-4">
      <Separator />
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row p-2">
        <div className="flex items-center justify-center w-full">
          <p className="text-xs italic">
            Developed by Afif Rohul · &copy; {new Date().getFullYear()} All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  ) : null
}

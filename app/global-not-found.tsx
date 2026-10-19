/* eslint-disable @next/next/no-html-link-for-pages */
// Import global styles and fonts
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { noto_sans_jp } from "@/lib/font"
// import Link from "next/link"
import { LuArrowLeft } from "react-icons/lu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "404 - Page Not Found",
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="grid min-h-screen">
          <main className="min-w-0">
            <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
              <div className="bg-foreground p-4">
                <h1 className="text-6xl font-black tracking-widest text-background">
                  404
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <p className={`${noto_sans_jp.className}`}>
                  ページが見つかりません
                </p>
                <p>・</p>
                <p className="font-mono">PAGE NOT FOUND</p>
              </div>
              <a
                href="/"
                className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest duration-150 hover:bg-accent-foreground hover:text-accent"
              >
                <LuArrowLeft />
                <span>RETURN HOME</span>
              </a>
            </div>
          </main>
        </div>
        <div className="paperOverlay opacity-30" />
      </body>
    </html>
  )
}

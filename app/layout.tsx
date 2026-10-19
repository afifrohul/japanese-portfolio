import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { DesktopNavigation } from "@/components/navigation/desktop-navigation"
import Header from "@/components/header"
import { MobileNavigation } from "@/components/navigation/mobile-navigation"

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" })

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        geistHeading.variable
      )}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> 墨朱 | Afif Rohul</title>
      </head>
      <body>
        <div className="grid min-h-screen lg:grid-cols-[340px_1fr]">
          <DesktopNavigation />

          <main className="min-w-0">
            <MobileNavigation />

            <div className="flex min-h-screen w-full max-w-6xl flex-col pb-16">
              <Header />
              <Separator />
              {children}
            </div>
          </main>
        </div>
        <div className="paperOverlay opacity-30" />
      </body>
    </html>
  )
}

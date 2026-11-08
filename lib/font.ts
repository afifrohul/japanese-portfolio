import {
  Geist,
  Geist_Mono,
  Inter,
  Noto_Sans_JP,
  Ma_Shan_Zheng,
} from "next/font/google"

export const geistHeading = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] })

export const ma_shan_zheng = Ma_Shan_Zheng({ weight: "400" })

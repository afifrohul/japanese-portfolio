import type { Metadata } from "next"
import AboutContent from "./about-content"

export const metadata: Metadata = {
  title: "概要 - About | Afif Rohul",
}

export default function Page() {
  return <AboutContent />
}

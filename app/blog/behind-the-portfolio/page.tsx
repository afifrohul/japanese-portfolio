import type { Metadata } from "next"
import BehindThePortfolio from "./behind-the-portolio"

export const metadata: Metadata = {
  title: "墨朱 — Behind the Portfolio | Afif Rohul",
}

export default function Page() {
  return <BehindThePortfolio />
}

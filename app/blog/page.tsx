import type { Metadata } from "next"
import BlogContent from "./blog-content"

export const metadata: Metadata = {
  title: "ブログ - Blog | Afif Rohul",
}

export default function Page() {
  return <BlogContent />
}

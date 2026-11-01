import type { Metadata } from "next"
import BlogContent from "../../components/content/blog-content"

export const metadata: Metadata = {
  title: "ブログ - Blog | Afif Rohul",
}

export default function Page() {
  return <BlogContent />
}

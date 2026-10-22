import type { Metadata } from "next"
import EducationContent from "./education-content"

export const metadata: Metadata = {
  title: "教育 - Education | Afif Rohul",
}

export default function Page() {
  return <EducationContent />
}

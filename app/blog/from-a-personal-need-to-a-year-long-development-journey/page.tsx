import type { Metadata } from "next"
import PersonalLifeTracker from "../../../components/content/blogs/personal-life-tracker"

export const metadata: Metadata = {
  title: "From a Personal Need to a Year-Long Development Journey | Afif Rohul",
}

export default function Page() {
  return <PersonalLifeTracker/>
}

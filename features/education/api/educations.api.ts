import api from "@/lib/axios"
import type { Education } from "../types/educations"

export const getEducations = async () => {
  const { data } = await api.get("/education")

  const dataValue: Education[] = data.data

  return dataValue
}

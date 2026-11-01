import api from "@/lib/axios"
import type { Experience } from "../types/experience"

export const getExperince = async () => {
  const { data } = await api.get("/experience")

  const dataValue: Experience[] = data.data

  return dataValue
}

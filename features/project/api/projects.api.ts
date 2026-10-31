import api from "@/lib/axios"
import type { Project } from "../types/project"

export const getProjects = async () => {
  const { data } = await api.get("/project")

  const dataValue: Project[] = data.data

  return dataValue
}

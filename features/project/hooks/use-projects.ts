"use client"

import { useQuery } from "@tanstack/react-query"
import { getProjects } from "../api/projects.api"
import { fallbackProjects } from "../data/projects.fallback"

export const projectKeys = {
  all: ["projects"] as const,
}

export function useProjetcs() {
  return useQuery({
    queryKey: projectKeys.all,
    queryFn: getProjects,

    // Local fallback
    initialData: fallbackProjects,

    // Always attempt to fetch fresh data
    staleTime: 0,

    // Avoid excessive retries
    retry: 1,

    refetchOnWindowFocus: true,
  })
}

"use client"

import { useQuery } from "@tanstack/react-query"
import { getExperince } from "../api/experiences.api"
import { fallbackExperiences } from "../data/experiences.fallback"

export const experienceKeys = {
  all: ["experiences"] as const,
}

export function useExperinces() {
  return useQuery({
    queryKey: experienceKeys.all,
    queryFn: getExperince,

    // Local fallback
    initialData: fallbackExperiences,

    // Always attempt to fetch fresh data
    staleTime: 0,

    // Avoid excessive retries
    retry: 1,

    refetchOnWindowFocus: true,
  })
}

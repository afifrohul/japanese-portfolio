"use client"

import { useQuery } from "@tanstack/react-query"
import { getEducations } from "../api/educations.api"
import { fallbackEducations } from "../data/educations.fallback"

export const educationKeys = {
  all: ["educations"] as const,
}

export function useEducations() {
  return useQuery({
    queryKey: educationKeys.all,
    queryFn: getEducations,

    // Local fallback
    initialData: fallbackEducations,

    // Always attempt to fetch fresh data
    staleTime: 0,

    // Avoid excessive retries
    retry: 1,

    refetchOnWindowFocus: true,
  })
}

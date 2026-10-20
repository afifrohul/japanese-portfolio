export const audioState = {
  analyser: null as AnalyserNode | null,
  dataArray: null as Uint8Array<ArrayBuffer> | null,
  isPlaying: false,
}

export function getFrequencyBands() {
  const { analyser, dataArray } = audioState

  if (!analyser || !dataArray) {
    return { bass: 0, mid: 0, treble: 0 }
  }

  analyser.getByteFrequencyData(dataArray)

  const len = dataArray.length
  const bassEnd = Math.floor(len * 0.3)
  const midEnd = Math.floor(len * 0.6)

  let bassSum = 0
  let midSum = 0
  let trebleSum = 0

  for (let i = 0; i < len; i++) {
    if (i < bassEnd) bassSum += dataArray[i]
    else if (i < midEnd) midSum += dataArray[i]
    else trebleSum += dataArray[i]
  }

  return {
    bass: bassEnd > 0 ? bassSum / (bassEnd * 255) : 0,
    mid:
      midEnd > bassEnd
        ? midSum / ((midEnd - bassEnd) * 255)
        : 0,
    treble:
      len > midEnd
        ? trebleSum / ((len - midEnd) * 255)
        : 0,
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
}
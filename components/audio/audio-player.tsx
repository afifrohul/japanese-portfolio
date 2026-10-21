"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music2,
  X,
} from "lucide-react"
import { audioState } from "@/lib/audio"
import Equaliser from "./equaliser"
import { formatTime } from "./format-time"
import { TRACKS } from "./tracks"

const CARD_HEIGHT = 160
const CARD_MAX_WIDTH = 340
const SCREEN_GUTTER = 16
const HOVER_CLOSE_MS = 700

const sliderClass =
  "h-[3px] cursor-pointer appearance-none bg-foreground/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-accent [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent"

const iconButton =
  "flex items-center justify-center transition-[color,transform,background-color] duration-150 ease-out hover:text-accent active:scale-[0.92] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:text-current"

export function AudioPlayer() {
  const [playing, setPlaying] = useState(false)
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [muted, setMuted] = useState(false)
  const [open, setOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(1280)
  const [error, setError] = useState<string | null>(null)

  const rootRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const contextRef = useRef<AudioContext | null>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastVolumeRef = useRef(0.5)
  const shouldPlayRef = useRef(false)

  const track = TRACKS[index]
  const single = TRACKS.length <= 1

  useEffect(() => {
    const updateScreen = () => {
      setScreenWidth(window.innerWidth)
    }
    updateScreen()
    window.addEventListener("resize", updateScreen)
    return () => window.removeEventListener("resize", updateScreen)
  }, [])

  const setupAnalyser = useCallback(async (audio: HTMLAudioElement) => {
    if (!contextRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext

      if (!AudioContextClass) {
        throw new Error("Browser ini belum mendukung Web Audio API.")
      }

      const context = new AudioContextClass()
      const analyser = context.createAnalyser()
      analyser.fftSize = 256
      analyser.smoothingTimeConstant = 0.78

      const source = context.createMediaElementSource(audio)
      source.connect(analyser)
      analyser.connect(context.destination)

      contextRef.current = context
      audioState.analyser = analyser
      audioState.dataArray = new Uint8Array(
        new ArrayBuffer(analyser.frequencyBinCount)
      )
    }

    if (contextRef.current.state === "suspended") {
      await contextRef.current.resume()
    }
  }, [])

  useEffect(() => {
    const audio = new Audio()
    audio.preload = "metadata"
    audio.volume = 0.5
    audio.src = TRACKS[0].src
    audioRef.current = audio

    const onTimeUpdate = () => setTime(audio.currentTime)
    const onMetadata = () =>
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)

    const onEnded = () => {
      if (TRACKS.length > 1) {
        shouldPlayRef.current = true // Tandai agar lagu berikutnya otomatis diputar
        setIndex((current) => (current + 1) % TRACKS.length)
      } else {
        setPlaying(false)
        audioState.isPlaying = false
        setTime(0)
      }
    }
    const onPlay = () => {
      setPlaying(true)
      audioState.isPlaying = true
      setError(null)
    }
    const onPause = () => {
      setPlaying(false)
      audioState.isPlaying = false
    }
    const onError = () => {
      setError("Audio tidak dapat dimuat. Periksa file di public/audio.")
      setPlaying(false)
      audioState.isPlaying = false
    }

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onMetadata)
    audio.addEventListener("durationchange", onMetadata)
    audio.addEventListener("ended", onEnded)
    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("error", onError)

    return () => {
      // ... (cleanup listeners tetap sama)
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onMetadata)
      audio.removeEventListener("durationchange", onMetadata)
      audio.removeEventListener("ended", onEnded)
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("error", onError)
      audio.pause()
      audio.removeAttribute("src")
      audio.load()

      audioState.isPlaying = false
      audioState.analyser = null
      audioState.dataArray = null

      if (contextRef.current && contextRef.current.state !== "closed") {
        void contextRef.current.close()
      }
      contextRef.current = null
      audioRef.current = null
      if (hoverTimer.current) clearTimeout(hoverTimer.current)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !track) return

    // Cek apakah sedang dimainkan ATAU ada flag shouldPlay dari onEnded/tombol Next
    const shouldPlay = !audio.paused || shouldPlayRef.current
    shouldPlayRef.current = false // Reset kembali flag setelah dibaca

    audio.src = track.src
    audio.load()
    setTime(0)
    setDuration(0)
    setError(null)

    if (shouldPlay) {
      void audio.play().catch(() => {
        setPlaying(false)
        audioState.isPlaying = false
        setError("The next song cannot be played.")
      })
    }
  }, [index, track])

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    try {
      await setupAnalyser(audio)
      await audio.play()
      setError(null)
    } catch (cause) {
      setPlaying(false)
      audioState.isPlaying = false
      setError(
        cause instanceof Error ? cause.message : "Audio cannot be played."
      )
    }
  }, [setupAnalyser])

  const next = useCallback(() => {
    if (single) return
    shouldPlayRef.current = true // Pastikan tombol Next juga memaksa lagu baru terplay
    setIndex((current) => (current + 1) % TRACKS.length)
  }, [single])

  const previous = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.currentTime > 3 || single) {
      audio.currentTime = 0
      setTime(0)
      return
    }
    setIndex((current) => (current - 1 + TRACKS.length) % TRACKS.length)
  }, [single])

  const seek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (audioRef.current) audioRef.current.currentTime = value
    setTime(value)
  }

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    setVolume(value)
    if (value > 0) {
      lastVolumeRef.current = value
      setMuted(false)
    } else {
      setMuted(true)
    }
    if (audioRef.current) audioRef.current.volume = value
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (muted || audio.volume === 0) {
      const restored = lastVolumeRef.current || 0.5
      audio.volume = restored
      setVolume(restored)
      setMuted(false)
    } else {
      lastVolumeRef.current = audio.volume
      audio.volume = 0
      setMuted(true)
    }
  }

  const closeOnOutsideClick = useCallback((event: PointerEvent) => {
    if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("pointerdown", closeOnOutsideClick)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("pointerdown", closeOnOutsideClick)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, closeOnOutsideClick])

  const cardWidth = Math.max(
    260,
    Math.min(CARD_MAX_WIDTH, screenWidth - SCREEN_GUTTER * 2)
  )

  return (
    <div
      ref={rootRef}
      className="relative hidden w-fit transition-all duration-150 lg:block"
      onPointerEnter={() => {
        if (hoverTimer.current) {
          clearTimeout(hoverTimer.current)
        }
      }}
      onPointerLeave={(event) => {
        if (open && event.pointerType === "mouse") {
          if (hoverTimer.current) {
            clearTimeout(hoverTimer.current)
          }

          hoverTimer.current = setTimeout(() => setOpen(false), HOVER_CLOSE_MS)
        }
      }}
    >
      <div
        role="region"
        aria-label="Audio player"
        data-companion="audio"
        className="relative flex h-fit items-center gap-2 overflow-hidden border border-foreground/15 bg-background p-2 text-foreground shadow-sm transition-[width,box-shadow,border-color] duration-200 ease-out"
      >
        <button
          type="button"
          onClick={() => void togglePlay()}
          aria-label={playing ? "Pause audio" : "Play audio"}
          className={`${iconButton}`}
        >
          {playing ? (
            <Pause size={13} className="text-accent" />
          ) : (
            <Play size={13} className="text-accent" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close audio controls" : "Open audio controls"}
          className="flex h-full min-w-0 flex-1 items-center gap-2 overflow-hidden font-mono text-[10px] tracking-[0.16em] text-foreground/70 uppercase transition-colors hover:text-accent"
        >
          {/* Equalizer: tetap di DOM agar bisa dianimasikan */}
          <span
            aria-hidden="true"
            className={`grid shrink-0 overflow-hidden transition-[grid-template-columns,opacity,transform] duration-300 ease-out ${
              playing
                ? "translate-x-0 grid-cols-[1fr] opacity-100"
                : "-translate-x-1 grid-cols-[0fr] opacity-0"
            }`}
          >
            <span className="min-w-0 overflow-hidden">
              <Equaliser playing={playing} />
            </span>
          </span>

          <span className="truncate">{track.note}</span>

          {/* Time: selalu dirender, tetapi lebarnya berubah */}
          <span
            className={`grid shrink-0 overflow-hidden transition-[grid-template-columns,opacity,transform] duration-300 ease-out ${
              playing
                ? "translate-x-0 grid-cols-[1fr] opacity-100"
                : "translate-x-1 grid-cols-[0fr] opacity-0"
            }`}
          >
            <span className="min-w-0 overflow-hidden whitespace-nowrap text-foreground/50">
              {formatTime(time)}
            </span>
          </span>
        </button>
      </div>

      {/* CARD: panel terpisah di bawah pill */}
      <div
        aria-hidden={!open}
        inert={!open}
        style={{
          width: cardWidth,
          maxWidth: "calc(100vw - 2rem)",
          height: open ? CARD_HEIGHT : 0,
        }}
        className={`absolute top-[calc(100%+8px)] left-0 overflow-hidden border border-foreground/15 bg-background text-foreground shadow-[0_10px_28px_-12px_rgba(26,26,26,0.35)] transition-[height,opacity,transform] duration-200 ease-out ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div
          className="flex h-full flex-col justify-between px-4 py-3"
          style={{ width: cardWidth }}
        >
          {/* Track information */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center bg-accent/10 text-accent">
              <Music2 size={17} strokeWidth={1.6} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm leading-tight font-semibold">
                {track.title}
              </p>

              <p className="mt-1 truncate font-mono text-[9px] tracking-[0.18em] text-foreground/50 uppercase">
                {track.label ?? "Now playing"}
                {!single && ` · ${index + 1}/${TRACKS.length}`}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close audio controls"
              className={`${iconButton} size-6 shrink-0 text-foreground/60`}
            >
              <X size={13} />
            </button>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-2 font-mono text-[9px] text-foreground/55 tabular-nums">
            <span className="w-7">{formatTime(time)}</span>

            <input
              type="range"
              aria-label="Seek audio"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(time, duration || 0)}
              onChange={seek}
              disabled={!duration}
              className={`${sliderClass} min-w-0 flex-1`}
            />

            <span className="w-7 text-right">{formatTime(duration)}</span>
          </div>

          {/* Playback and volume */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous track"
                className={`${iconButton} size-7`}
              >
                <SkipBack size={15} strokeWidth={1.75} />
              </button>

              <button
                type="button"
                onClick={() => void togglePlay()}
                aria-label={playing ? "Pause audio" : "Play audio"}
                className="flex size-8 items-center justify-center bg-foreground text-background transition-colors hover:bg-accent active:scale-95"
              >
                {playing ? <Pause size={13} /> : <Play size={13} />}
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next track"
                disabled={single}
                className={`${iconButton} size-7`}
              >
                <SkipForward size={15} strokeWidth={1.75} />
              </button>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute audio" : "Mute audio"}
                className={`${iconButton} size-6 shrink-0 text-foreground/60`}
              >
                {muted || volume === 0 ? (
                  <VolumeX size={14} />
                ) : (
                  <Volume2 size={14} />
                )}
              </button>

              <input
                type="range"
                aria-label="Volume"
                min={0}
                max={1}
                step={0.01}
                value={muted ? 0 : volume}
                onChange={changeVolume}
                className={`${sliderClass} w-16`}
              />
            </div>
          </div>

          {error && (
            <p role="status" className="truncate text-[10px] text-accent">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

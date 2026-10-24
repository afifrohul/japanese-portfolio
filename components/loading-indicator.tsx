import { noto_sans_jp } from "@/lib/font"
import { ThinkingOrb } from "thinking-orbs"

type LoadingIndicatorProps = {
  fullScreen?: boolean
}

export default function LoadingIndicator({
  fullScreen = true,
}: LoadingIndicatorProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 bg-background text-foreground ${
        fullScreen ? "min-h-screen" : "w-full"
      }`}
    >
      <ThinkingOrb
        state="connecting"
        size={32}
        color="#b94232"
      />

      <p className={`${noto_sans_jp.className} text-sm tracking-[0.4em]`}>
        読み込み中
      </p>

      <p className="font-mono text-xs tracking-widest text-accent">
        LOADING...
      </p>
    </div>
  )
}
import { noto_sans_jp } from "@/lib/font"
import StampBrand from "./brand/stamp"

interface SideDecorationProps {
  page: string
  content: string
}

export default function SideDecoration({ page, content }: SideDecorationProps) {
  return (
    <div className="mt-20 mr-4 hidden flex-col justify-between md:flex">
      <div className="flex flex-col items-center gap-2">
        <div className="vertical-panel-rl w-fit py-2">
          <p className={`${noto_sans_jp.className} tracking-widest`}>
            {content}
          </p>
        </div>
        <div className="h-10 w-px bg-accent" />
        <StampBrand content="道" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="vertical-panel-rl w-fit py-2">
          <p className={`${noto_sans_jp.className} tracking-widest`}>{page}</p>
        </div>
        <div className="h-12 w-px bg-accent" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
      </div>
    </div>
  )
}

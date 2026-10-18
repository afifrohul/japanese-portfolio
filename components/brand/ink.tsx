import { ma_shan_zheng } from "@/lib/font"

export default function InkBrand() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="bg-accent px-2 py-1">
        <p
          className={`${ma_shan_zheng.className} text-xl font-bold text-background`}
        >
          墨
        </p>
      </div>
      <p className="text-xl font-bold">
        sumi<span className="text-accent">.</span>
      </p>
    </div>
  )
}

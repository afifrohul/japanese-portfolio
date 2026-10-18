import { ma_shan_zheng } from "@/lib/font"

interface StampBrandProps {
  content: string
}

export default function StampBrand({ content }: StampBrandProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="border-2 border-accent">
        <p
          className={`${ma_shan_zheng.className} text-xl font-bold text-accent`}
        >
          {content}
        </p>
      </div>
    </div>
  )
}

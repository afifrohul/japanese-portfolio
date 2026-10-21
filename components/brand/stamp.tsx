import { ma_shan_zheng } from "@/lib/font"
import { cn } from "cn"

interface StampBrandProps {
  content: string
  classname?: string
}

export default function StampBrand({ content, classname }: StampBrandProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="border-2 border-accent">
        <p
          className={cn(`${ma_shan_zheng.className} text-xl font-bold text-accent`, classname)}
        >
          {content}
        </p>
      </div>
    </div>
  )
}

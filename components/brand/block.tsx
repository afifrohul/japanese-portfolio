import { ma_shan_zheng } from "@/lib/font"
import { cn } from "cn"

interface BlockBrandProps {
  content: string
  classname?: string
}

export default function BlockBrand({ content, classname }: BlockBrandProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="bg-accent px-2 py-1">
        <p
          className={cn(`${ma_shan_zheng.className} text-xl font-bold text-background`, classname)}
        >
          {content}
        </p>
      </div>
    </div>
  )
}

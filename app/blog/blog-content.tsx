import ImageWithBlurPlaceholder from "@/components/image-with-blur-placeholder"
import SideDecoration from "@/components/side-decoration"
import { noto_sans_jp } from "@/lib/font"
import castle from "@/public/assets/castle-sun.png"
import { blogs } from "./data"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function BlogContent() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-6 pt-16 lg:px-24">
        <ImageWithBlurPlaceholder src={castle} classname="h-36 w-36 md:h-56 md:w-56" />
        <div className="space-y-2">
          <div className="w-fit bg-foreground px-4 py-3 text-background">
            <h1
              className={`${noto_sans_jp.className} text-4xl font-black tracking-tight`}
            >
              ブログ
            </h1>
          </div>
          <div className="flex w-full items-center gap-3">
            <p className="tracking-widest text-accent">BLOG</p>
            <div className="h-px w-6 bg-foreground" />
            <p className="tracking-widest text-accent">
              {blogs.length} ARTICLES
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {blogs.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="group duration-150 hover:bg-foreground/5"
            >
              <div className="flex flex-col gap-2 p-2">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p
                      className={`up order-2 text-base font-medium duration-150 group-hover:text-accent md:order-1 md:text-lg ${noto_sans_jp.className}`}
                    >
                      {item.title}
                    </p>
                    <p className="order-1 font-mono text-xs text-muted-foreground md:order-2">
                      {item.created_at}
                    </p>
                  </div>
                </div>
                <p className="text-sm lg:w-5/6">{item.desc}</p>
                <div className="flex items-center gap-2">
                  {item.tags.map((item, indexItem) => (
                    <div
                      key={indexItem}
                      className="border border-muted-foreground px-2 py-1 text-muted-foreground hover:cursor-pointer hover:border-accent hover:text-accent"
                    >
                      <p className="font-mono text-xs uppercase">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
            </Link>
          ))}
        </div>
      </div>
      <SideDecoration page="ブログ" content="静かな存在感" />
    </div>
  )
}

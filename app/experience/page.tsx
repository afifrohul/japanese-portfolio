import { noto_sans_jp } from "@/lib/font"
import Image from "next/image"
import { experiences } from "./data"
import { Separator } from "@/components/ui/separator"
import SideDecoration from "@/components/side-decoration"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "経験 - Experience | Afif Rohul",
}

export default function Page() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-6 pt-16 lg:px-24">
        <Image
          src={"/assets/mountain-sun.png"}
          alt="mountain-sun"
          width={500}
          height={500}
          className="h-36 w-36 md:h-56 md:w-56"
        />
        <div className="space-y-2">
          <div className="w-fit bg-foreground px-4 py-3 text-background">
            <h1
              className={`${noto_sans_jp.className} text-4xl font-black tracking-tight`}
            >
              経験
            </h1>
          </div>
          <div className="flex w-full items-center gap-3">
            <p className="tracking-widest text-accent">EXPERIENCE</p>
            <div className="h-px w-6 bg-foreground" />
            <p className="tracking-widest text-accent">{experiences.length} ROLES</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {experiences.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="order-2 text-base font-medium md:order-1 md:text-lg up">
                    {item.company}
                  </p>
                  <p className="UPPE order-1 text-xs text-muted-foreground md:order-2">
                    {item.start_month} {item.start_year} - {item.end_month}{" "}
                    {item.end_year}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground uppercase font-mono">
                  {item.role} ・ {item.location}
                </p>
              </div>
              <p className="text-sm">{item.desc}</p>
              <Separator />
            </div>
          ))}
        </div>
      </div>
      <SideDecoration page="経験" content="体験の創出" />
    </div>
  )
}

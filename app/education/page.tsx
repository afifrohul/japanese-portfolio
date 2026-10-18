import { noto_sans_jp } from "@/lib/font"
import Image from "next/image"
import { educations } from "./data"
import { Separator } from "@/components/ui/separator"
import SideDecoration from "@/components/side-decoration"

export default function Page() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-6 pt-16 lg:px-24">
        <Image
          src={"/assets/book-sun.png"}
          alt="tori-sun"
          width={500}
          height={500}
          className="h-36 w-36 md:h-56 md:w-56"
        />
        <div className="space-y-2">
          <div className="w-fit bg-foreground px-4 py-3 text-background">
            <h1
              className={`${noto_sans_jp.className} text-4xl font-black tracking-tight`}
            >
              教育
            </h1>
          </div>
          <div className="flex w-full items-center gap-3">
            <p className="tracking-widest text-accent">EDUCATION</p>
            <div className="h-px w-6 bg-foreground" />
            <p className="tracking-widest text-accent">2 JOURNEY</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {educations.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="order-2 text-base font-medium md:order-1 md:text-lg">
                    {item.company}
                  </p>
                  <p className="UPPE order-1 text-xs text-muted-foreground md:order-2">
                    {item.start_month} {item.start_year} - {item.end_month}{" "}
                    {item.end_year}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground uppercase">
                  {item.department}
                </p>
              </div>
              <p className="text-sm">{item.desc}</p>
              <p className="text-xs text-muted-foreground">{item.focus}</p>
              <Separator />
            </div>
          ))}
        </div>
      </div>
      <SideDecoration page="教育" content="継続的な学習" />
    </div>
  )
}

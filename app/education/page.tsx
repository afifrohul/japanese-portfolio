import { noto_sans_jp } from "@/lib/font"
import Image from "next/image"
import StampBrand from "@/components/brand/stamp"
import { educations } from "./data"
import { Separator } from "@/components/ui/separator"

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
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-base md:text-lg font-medium order-2 md:order-1">{item.company}</p>
                  <p className="UPPE text-xs text-muted-foreground order-1 md:order-2">
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
      <div className="mt-20 mr-4 hidden flex-col justify-between md:flex">
        <div className="flex flex-col items-center gap-2">
          <div className="vertical-panel-rl w-fit py-2">
            <p className={`${noto_sans_jp.className} tracking-widest`}>
              継続的な学習
            </p>
          </div>
          <div className="h-10 w-px bg-accent"></div>
          <StampBrand content="道" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="vertical-panel-rl w-fit py-2">
            <p className={`${noto_sans_jp.className} tracking-widest`}>教育</p>
          </div>
          <div className="h-12 w-px bg-accent"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-accent"></div>
        </div>
      </div>
    </div>
  )
}

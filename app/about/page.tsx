import { noto_sans_jp } from "@/lib/font"
import { about, socials } from "./data"
import Image from "next/image"
import SideDecoration from "@/components/side-decoration"

export default function Page() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-8 pt-16 lg:px-24">
        <Image
          src={"/assets/tori-sun.png"}
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
              概要
            </h1>
          </div>
          <div className="flex w-full items-center gap-3">
            <p className="tracking-widest text-accent">ABOUT</p>
            <div className="flex-1">
              <div className="h-px w-16 bg-foreground" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-sm tracking-wide lg:pr-16">{about}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {socials.map(({ label, link, icon: Icon }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest duration-150 hover:bg-accent-foreground hover:text-accent"
            >
              <Icon />
              <p>{label}</p>
            </a>
          ))}
        </div>
      </div>
      <SideDecoration page="概要" content="デザイン・開発" />
    </div>
  )
}

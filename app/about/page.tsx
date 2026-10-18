import { noto_sans_jp } from "@/lib/font"
import { about, socials } from "./data"
import Image from "next/image"
import StampBrand from "@/components/brand/stamp"

export default function Page() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-24 pt-16">
        <Image
          src={"/assets/tori-sun.png"}
          alt="tori-sun"
          width={500}
          height={500}
          className="h-56 w-56"
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
          <p className="pr-16 text-sm tracking-wide">
            {about}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ label, link, icon: Icon }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest duration-150 hover:bg-accent-foreground hover:text-accent"
            >
              <Icon />
              <p >{label}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20 mr-4 hidden flex-col justify-between md:flex">
        <div className="flex flex-col items-center gap-2">
          <div className="vertical-panel-rl w-fit py-2">
            <p className={`${noto_sans_jp.className} tracking-widest`}>
              {/* 継続的な学習 */}
              デザイン・開発
            </p>
          </div>
          <div className="h-10 w-px bg-accent"></div>
          <StampBrand content="道" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="vertical-panel-rl w-fit py-2">
            <p className={`${noto_sans_jp.className} tracking-widest`}>概要</p>
          </div>
          <div className="h-12 w-px bg-accent"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-accent"></div>
        </div>
      </div>
    </div>
  )
}

import { noto_sans_jp } from "@/lib/font"
import SideDecoration from "@/components/side-decoration"
import tori from "@/public/assets/tori-sun.png"
import ImageWithBlurPlaceholder from "@/components/image-with-blur-placeholder"
import { socials } from "../../features/about/data/socials.fallback"
import { about } from "../../features/about/data/about.fallback"
// import { Atom, Code, Code2, Database, Globe, HardDrive, Server, Wind } from "lucide-react"

export default function AboutContent() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-8 pt-16 lg:px-24">
        <ImageWithBlurPlaceholder
          src={tori}
          classname="h-36 w-36 md:h-56 md:w-56"
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
        <p className="font-mono font-semibold tracking-widest text-accent">
          {`Hi, I'm Afif Rohul Abrori.`}
        </p>
        <div className="space-y-2">
          <p className="font- font-mono text-muted-foreground uppercase">
            — A little about me
          </p>
          <p className="text-sm">{about}</p>
        </div>

        <div className="space-y-2">
          <p className="font- font-mono text-muted-foreground uppercase">
            — Socials
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {socials.map(({ label, link, icon: Icon }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                className="flex items-center gap-2 px-2 py-1 text-xs tracking-widest duration-150 hover:bg-accent-background hover:text-accent"
              >
                <Icon />
                <p>{label}</p>
              </a>
            ))}
          </div>
        </div>

        {/* <div className="space-y-2">
          <p className="font- font-mono text-muted-foreground uppercase">
            — Expertise
          </p>
          <div className="space-y-2 font-mono text-xs font-medium">
            <div className="grid h-48 w-full grid-cols-3 gap-2">
              <div className="col-span-2 flex h-full items-center justify-center gap-1 border">
                <Code2 className="h-3.5 w-3.5" />
                Laravel
              </div>
              <div className="flex h-full items-center justify-center gap-1 border">
                <Atom className="h-3.5 w-3.5" />
                React
              </div>
            </div>

            <div className="grid h-48 w-full grid-cols-2 gap-2">
              <div className="grid grid-rows-2 gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-center gap-1 border">
                    <Server className="h-3.5 w-3.5" />
                    Node.js
                  </div>

                  <div className="grid grid-rows-2 gap-2">
                    <div className="flex items-center justify-center gap-1 border">
                      <Code className="h-3.5 w-3.5" />
                      Express.js
                    </div>
                    <div className="flex items-center justify-center gap-1 border">
                      <HardDrive className="h-3.5 w-3.5" />
                      Nest.js
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 border">
                  <Wind className="h-3.5 w-3.5" />
                  Tailwind CSS
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center gap-1 border">
                  <Database className="h-3.5 w-3.5" />
                  SQL
                </div>
                <div className="flex items-center justify-center gap-1 border">
                  <Globe className="h-3.5 w-3.5" />
                  Next.js
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <SideDecoration page="概要" content="静かな存在感" />
    </div>
  )
}

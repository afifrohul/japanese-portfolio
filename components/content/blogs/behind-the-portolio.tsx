import { ma_shan_zheng, noto_sans_jp } from "@/lib/font"
import SideDecoration from "@/components/side-decoration"
import ImageWithBlurPlaceholder from "@/components/image-with-blur-placeholder"
import { Separator } from "@/components/ui/separator"
import btp from "@/public/blog/btp.png"
import StampBrand from "@/components/brand/stamp"

export default function BehindThePortfolio() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-6 py-16 lg:px-24">
        <ImageWithBlurPlaceholder
          src={btp}
          classname="h-24 lg:h-48 border-2 z-50"
        />
        <div className="space-y-2">
          <h1
            className={`${noto_sans_jp.className} text-lg font-semibold lg:text-2xl`}
          >
            墨朱 — Behind the (new) Portfolio
          </h1>
          <p className="font-mono text-xs text-muted-foreground">
            25 Oct 2026 | DESIGN・DEVELOPMENT
          </p>
        </div>
        <div className="z-50 space-y-8">
          {/* BACK STORY */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Back Story</h1>
            <p className="font- font-mono text-muted-foreground uppercase">
              — Reasons for renewing a portfolio
            </p>
            <p className="text-sm">
              {`I felt like something was missing from my previous portfolio. It
              had the usual features you'd expect from a developer portfolio,
              such as light and dark modes, a landscape-oriented layout, and
              sections showcasing my work and background. It did its job, but it
              didn't quite feel like me.`}
            </p>
            <p className="text-sm">
              This time, I wanted to try something different. Rather than
              building another portfolio that simply presents who I am and what
              I do, I wanted to create something with a stronger sense of
              identity, something that reflects my personal taste and the way I
              approach design. That led me to explore a{" "}
              <span className="font-semibold text-accent italic">
                Minimalist Japanese-inspired aesthetic
              </span>
              , built around the contrast between ink and vermilion. I decided
              to commit to a single light theme, stepping away from the familiar
              light-and-dark mode combination to give the entire experience a
              more intentional and cohesive feel.
            </p>
            <Separator />
          </div>

          {/* DESIGN DIRECTION */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Design Direction</h1>
            <div className="space-y-6">
              {/* MAIN STYLE */}
              <div className="space-y-2">
                <p className="font-mono text-muted-foreground uppercase">
                  — Main Style
                </p>
                <p className="text-sm">
                  The visual direction started with three simple elements: ink,
                  vermilion, and washi. I wanted the interface to feel like ink
                  on paper, with vermilion accents adding just enough contrast
                  to draw attention. A subtle paper texture brings warmth to the
                  otherwise minimal layout.
                </p>

                <div className="mt-2 border">
                  <table className="w-full text-left text-xs">
                    <thead className="border-default border-b text-sm">
                      <tr>
                        <th
                          scope="col"
                          className="bg-foreground/5 px-6 py-3 font-medium"
                        >
                          ELEMENT
                        </th>
                        <th
                          scope="col"
                          className="bg-foreground/5 px-6 py-3 font-medium"
                        >
                          VISUAL MEANING
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-default border-b">
                        <th
                          scope="row"
                          className="text-heading px-6 py-4 font-medium"
                        >
                          <p className={`${noto_sans_jp.className}`}>
                            墨 / sumi / ink
                          </p>
                        </th>
                        <td className="px-6 py-4">
                          <p>
                            represents the primary dark color, providing
                            contrast and structure to the interface.
                          </p>
                        </td>
                      </tr>
                      <tr className="border-default border-b">
                        <th
                          scope="row"
                          className="text-heading px-6 py-4 font-medium"
                        >
                          <p className={`${noto_sans_jp.className}`}>
                            朱 / vermilion
                          </p>
                        </th>
                        <td className="px-6 py-4">
                          <p>
                            eye-catching red accents represents strength and
                            courage.
                          </p>
                        </td>
                      </tr>
                      <tr className="">
                        <th
                          scope="row"
                          className="text-heading px-6 py-4 font-medium"
                        >
                          <p className={`${noto_sans_jp.className}`}>
                            和紙 / washi / japanese paper
                          </p>
                        </th>
                        <td className="px-6 py-4">
                          <p>
                            the texture of the paper adds warmth and reduces the
                            overly digital feel.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Separator />

              {/* TYPEFACE */}
              <div className="space-y-3">
                <p className="font-mono text-muted-foreground uppercase">
                  — TYPEFACE
                </p>

                <div className="grid grid-cols-1 gap-4 font-heading md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3 border p-3 font-heading">
                    <h1 className="text-sm font-medium">Headings</h1>
                    <h1 className="text-3xl font-bold lg:text-5xl">Aa</h1>
                    <div>
                      <h1 className="text-sm font-medium">Geist</h1>
                      <h1 className="text-xs text-muted-foreground">
                        Bold / Semibold / Medium
                      </h1>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <h1 className="uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
                      <h1 className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
                      <h1>1234567890</h1>
                    </div>
                  </div>
                  <div className="space-y-3 border p-3 font-sans">
                    <p className="text-sm">Body</p>
                    <p className="text-3xl lg:text-5xl">Aa</p>
                    <div>
                      <p className="text-sm font-medium">Inter</p>
                      <p className="text-xs text-muted-foreground">
                        Medium / Regular
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="space-y-3 border p-3 font-mono">
                    <p className="text-sm">Mono</p>
                    <p className="text-3xl lg:text-5xl">Aa</p>
                    <div>
                      <p className="text-sm font-medium">Geist Mono</p>
                      <p className="text-xs text-muted-foreground">
                        Medium / Regular
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div
                    className={`${noto_sans_jp.className} space-y-3 border p-3`}
                  >
                    <p className="text-sm font-medium">
                      Hiragana・Katakana・Kanji
                    </p>

                    <p className="text-3xl font-medium lg:text-5xl">あ ア 漢</p>

                    <div>
                      <p className="text-sm font-medium">Noto Sans JP</p>
                      <p className="text-xs text-muted-foreground">
                        Black / Medium / Regular
                      </p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>あいうえお かきくけこ</p>
                      <p>アイウエオ カキクケコ</p>
                      <p>日本語 漢字 文字</p>
                    </div>
                  </div>
                  <div
                    className={`${ma_shan_zheng.className} space-y-4 border p-3`}
                  >
                    <p className="text-sm font-medium">
                      Kanji・Calligraphic Style
                    </p>

                    <p className="text-3xl lg:text-5xl">日本 墨朱</p>

                    <div>
                      <p className="text-sm font-medium">Ma Shan Zheng</p>
                      <p className="text-xs text-muted-foreground">Regular</p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>日本 — Japan</p>
                      <p>墨 朱 — Ink</p>
                      <p>朱 — Vermilion</p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />

              {/* COLOR SYSTEM */}
              <div className="space-y-2">
                <p className="font-mono text-muted-foreground uppercase">
                  — COLOR SYSTEM
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-1">
                    <div className="h-24 bg-background" />
                    <div>
                      <p className="text-sm font-semibold">
                        Washi{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (Background)
                        </span>
                      </p>
                      <p className="text-sm font-medium text-muted-foreground uppercase">
                        #f5f1e8
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-24 bg-foreground" />
                    <div>
                      <p className="text-sm font-semibold">
                        Ink{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (Foreground)
                        </span>
                      </p>
                      <p className="text-sm font-medium text-muted-foreground uppercase">
                        #202321
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-24 bg-accent" />
                    <div>
                      <p className="text-sm font-semibold">
                        Vermilion{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (Accent)
                        </span>
                      </p>
                      <p className="text-sm font-medium text-muted-foreground uppercase">
                        #b94232
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-24 bg-accent-background" />
                    <div>
                      <p className="text-sm font-semibold">
                        Vermilion Light{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (Accent Background)
                        </span>
                      </p>
                      <p className="text-sm font-medium text-muted-foreground uppercase">
                        #f0dcd5
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-24 bg-secondary-background" />
                    <div>
                      <p className="text-sm font-semibold">
                        Dark Washi{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (Secondary Background)
                        </span>
                      </p>
                      <p className="text-sm font-medium text-muted-foreground uppercase">
                        #ded8cd
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full border flex">
                    <div className="bg-background h-4 w-8/10"/>
                    <div className="bg-foreground h-4 w-3/20"/>
                    <div className="bg-accent h-4 w-1/20"/>
                  </div>
                  <div className="w-full flex items-center justify-between mt-1 font-mono">
                    <p className="text-xs text-muted-foreground">80% WASHI</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">15% INK</p>
                      <p className="text-xs text-muted-foreground">/</p>
                      <p className="text-xs text-muted-foreground">5% VERMILION</p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />

              {/* GRAPHIC ELEMENTS */}
              <div className="space-y-2">
                <p className="font-mono text-muted-foreground uppercase">
                  — GRAPHIC ELEMENTS
                </p>
                <div className="grid grid-cols-1 gap-4 font-heading md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3 border p-3 font-heading">
                    <div className="flex w-full items-center justify-center gap-4 p-4">
                      <div className="h-8 w-8 rounded-full bg-accent" />
                      <div className="h-8 w-8 bg-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Circle & Non-rounded Square Vermilion
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Accent Shape
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <h1 className="">
                        A simple shape representing the sun or a visual marker.
                      </h1>
                    </div>
                  </div>
                  <div className="space-y-3 border p-3 font-heading">
                    <div className="flex w-full items-center justify-center gap-4 p-4">
                      <div className="h-8 w-px bg-accent" />
                      <div className="h-8 w-px bg-foreground" />
                      <div className="h-8 w-px bg-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Thin Line</p>
                      <p className="text-xs text-muted-foreground">
                        Graphic Divider
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <h1 className="">
                        Used to separate sections, elements, or important
                        information.
                      </h1>
                    </div>
                  </div>
                  <div className="space-y-3 border p-3 font-heading">
                    <div className="flex w-full items-center justify-center gap-4 p-4">
                      <StampBrand content="朱" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Japanese Seal</p>
                      <p className="text-xs text-muted-foreground">
                        Stamp Element
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <h1 className="">
                        Used as accents are logos, buttons, or decorative
                        elements.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
            </div>
          </div>

          {/* TECH STACK */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Tech Stack</h1>
            <p className="font- font-mono text-muted-foreground uppercase">
              — The tools behind the experience
            </p>
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="font-semibold">Framework & UI</h1>
                <div className="text-muted-foreground">
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Next.js
                    </span>{" "}
                    — The foundation of the portfolio, handling the application
                    structure, routing, and page. rendering.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      React
                    </span>{" "}
                    — Building reusable components and interactive experiences
                    throughout the website. rendering.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      TypeScript
                    </span>{" "}
                    — Keeping the code more predictable and maintainable as the
                    project grows. rendering.
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="font-semibold">Styling & Components</h1>
                <div className="text-muted-foreground">
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Tailwind CSS
                    </span>{" "}
                    — Building the layout, styling the interface, and
                    translating the design system into code.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      shadcn/ui
                    </span>{" "}
                    — Providing a foundation for accessible, reusable UI
                    components that can be customized to fit the visual
                    identity.
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="font-semibold">Motion & Interaction</h1>
                <div className="text-muted-foreground">
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Framer Motion
                    </span>{" "}
                    — Adding subtle transitions and animations to make the
                    interface feel more alive without overwhelming the content.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Lenis
                    </span>{" "}
                    — Creating a smoother scrolling experience throughout the
                    website.
                  </p>
                </div>
              </div>
            </div>
            <Separator />
          </div>
        </div>
      </div>
      <SideDecoration page="事業" content="デザイン・開発" />
    </div>
  )
}

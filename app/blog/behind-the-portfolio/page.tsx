import { ma_shan_zheng, noto_sans_jp } from "@/lib/font"
import SideDecoration from "@/components/side-decoration"
import ImageWithBlurPlaceholder from "@/components/image-with-blur-placeholder"
import { Separator } from "@/components/ui/separator"
import btp from "@/public/blog/btp.png"

export default function ProjectContent() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-6 pt-16 lg:px-24">
        <ImageWithBlurPlaceholder src={btp} classname="h-24 lg:h-48 border-4" />
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
        <div className="space-y-8">
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
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Design Direction</h1>
            <div className="space-y-6">
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
              <div className="space-y-3">
                <p className="font-mono text-muted-foreground uppercase">
                  — TYPEFACE
                </p>

                <div className="grid grid-cols-1 gap-4 font-heading lg:grid-cols-3">
                  <div className="space-y-3 border p-3 font-heading">
                    <h1 className="text-sm font-medium">Headings</h1>
                    <h1 className="text-3xl lg:text-5xl font-bold">Aa</h1>
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
                        Medium / Reguler
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
                        Medium / Reguler
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className={`${noto_sans_jp.className} space-y-3 border p-3`}>
                    <p className="text-sm font-medium">
                      Hiragana・Katakana・Kanji
                    </p>

                    <p className="text-3xl lg:text-5xl font-medium">あ ア 漢</p>

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
                  <div className={`${ma_shan_zheng.className} space-y-4 border p-3`}>
                    <p className="text-sm font-medium">
                      Kanji・Calligraphic Style
                    </p>

                    <p className="text-3xl lg:text-5xl">墨朱</p>

                    <div>
                      <p className="text-sm font-medium">Ma Shan Zheng</p>
                      <p className="text-xs text-muted-foreground">
                        Bold
                      </p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>墨 朱 — Ink</p>
                      <p>朱 — Vermilion</p>
                      <p>山水 — Mountains and water</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="space-y-2">
                <p className="font-mono text-muted-foreground uppercase">
                  — COLOR SYSTEM
                </p>
              </div> */}
            </div>

            <Separator />
          </div>
        </div>
      </div>
      <SideDecoration page="事業" content="デザイン・開発" />
    </div>
  )
}

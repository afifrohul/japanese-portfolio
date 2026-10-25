import { noto_sans_jp } from "@/lib/font"
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
          <p
            className={`${noto_sans_jp.className} text-lg font-semibold lg:text-2xl`}
          >
            墨朱 — Behind the (new) Portfolio
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            25 Oct 2026 | DESIGN・DEVELOPMENT
          </p>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-lg font-bold">Back Story</p>
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
            <p className="text-lg font-bold">Design System</p>
            <p className="font- font-mono text-muted-foreground uppercase">
              — Main Style
            </p>
            <p className="text-sm">
              The visual direction started with three simple elements: ink,
              vermilion, and washi. I wanted the interface to feel like ink on
              paper, with vermilion accents adding just enough contrast to draw
              attention. A subtle paper texture brings warmth to the otherwise
              minimal layout.
            </p>

            <div className="border mt-2">
              <table className="text-body w-full text-left text-sm rtl:text-right">
                <thead className="text-body bg-neutral-secondary-soft rounded-base border-default border-b text-sm">
                  <tr>
                    <th
                      scope="col"
                      className="w-25 bg-foreground/5 px-6 py-3 font-medium"
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
                  <tr className="bg-neutral-primary border-default border-b">
                    <th
                      scope="row"
                      className="text-heading px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <p className={`${noto_sans_jp.className}`}>
                        墨 / sumi / ink
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      <p>
                        represents the primary dark color, providing contrast
                        and structure to the interface.
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-neutral-primary border-default border-b">
                    <th
                      scope="row"
                      className="text-heading px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <p className={`${noto_sans_jp.className}`}>
                        朱 / vermilion
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      <p>eye-catching red accents on certain elements.</p>
                    </td>
                  </tr>
                  <tr className="bg-neutral-primary">
                    <th
                      scope="row"
                      className="text-heading px-6 py-4 font-medium whitespace-nowrap"
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

            <Separator />
          </div>
        </div>
      </div>
      <SideDecoration page="事業" content="デザイン・開発" />
    </div>
  )
}

import SideDecoration from "@/components/side-decoration"
import ImageWithBlurPlaceholder from "@/components/image-with-blur-placeholder"
import { Separator } from "@/components/ui/separator"
import plt from "@/public/blog/plt.png"
import Link from "next/link"
import { LuChevronLeft } from "react-icons/lu"
import {
  ArrowDown,
  CircleDollarSign,
  Combine,
  FaceSlightlySmiling,
  IterationCcw,
  LayoutGrid,
  ListTodo,
  NotebookPen,
  ScanSearch,
} from "lucide-react"
import summary from "@/public/blog/personal-life-tracker/summary.png"
import tracker from "@/public/blog/personal-life-tracker/tracker.png"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PersonalLifeTracker() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col gap-8 px-6 py-16 lg:px-24">
        <Link
          href="/blog"
          className="flex w-fit items-center gap-2 border px-2 py-1 text-xs tracking-widest text-muted-foreground transition-colors duration-150 hover:bg-accent-background hover:text-accent"
        >
          <LuChevronLeft />
          <span className="hidden md:block">BACK</span>
        </Link>
        <ImageWithBlurPlaceholder
          src={plt}
          classname="h-24 lg:h-48 border-2 z-50"
        />
        <div className="space-y-2">
          <h1 className={`text-lg font-semibold lg:text-2xl`}>
            From a Personal Need to a Year-Long Development Journey
          </h1>
          <p className="font-mono text-xs text-muted-foreground">
            14 Nov 2026 | DESIGN・DEVELOPMENT・PERSONAL
          </p>
        </div>
        <div className="z-50 space-y-8">
          {/* BACK STORY */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Back Story</h1>
            <p className="font- font-mono text-muted-foreground uppercase">
              — Personal problem & Building habit
            </p>
            <p className="text-sm">
              {`I've always wanted to have a personal project that I could work on
              consistently, something that would give me a reason to write code
              every day.`}
            </p>
            <p className="text-sm">
              {`As a developer, I believe that improving my skills requires more than just learning new technologies or following tutorials. It also takes practice, experimentation, and consistency. I wanted to build something that I could keep coming back to, even when I didn't have a specific learning goal in mind. But I also had another consideration. I didn't want to build just another project that would eventually end up sitting in a GitHub repository, untouched after its initial development.`}
            </p>
            <p className="text-sm">
              I wanted to create something that I could actually use in my
              everyday life. Something that addressed my own needs and solved
              problems I personally experienced. That was where the idea of
              <span className="font-semibold text-accent italic">
                Personal Life Tracker
              </span>{" "}
              began.
            </p>
            <p className="text-sm">
              {`Rather than building an application around a single purpose, I wanted to create a personal space where I could manage and keep track of different aspects of my daily life. It would be something useful to me, while also giving me room to continuously learn, experiment, and improve as a developer. Looking back, the idea wasn't necessarily about building something big from the beginning. It was about creating something meaningful enough to keep developing, one small improvement at a time.`}
            </p>
            <Separator />
          </div>

          {/* INITIAL IDEA */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Initial Idea</h1>
            <p className="font- font-mono text-muted-foreground uppercase">
              — From a Habit Tracker to Something Bigger
            </p>
            <p className="text-sm">
              {`Initially, I thought this project would simply be a habit tracker. I wanted a place where I could record my daily habits, monitor my consistency, and see how well I maintained them over time.`}
            </p>
            <p className="text-sm">
              {`However, as I thought more about the idea, I started to realize that tracking habits alone wouldn't cover everything I wanted to manage in my daily life. There were other aspects that I also wanted to keep track of. My daily mood, tasks, personal finances, and even a space to write down my thoughts and reflections through journaling.`}
            </p>
            <div className="flex flex-col items-center gap-6 border p-8">
              <div className="flex w-full flex-col items-center border py-2">
                <div className="flex items-center gap-2">
                  <IterationCcw className="h-3 w-3" />
                  <p className="text-sm">Initial idea</p>
                </div>
                <p className="font-semibold text-accent">Habit Tracker</p>
                <p className="text-xs text-muted-foreground">
                  A simple way to track daily habits
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center gap-2">
                  <ScanSearch className="h-3 w-3 animate-pulse text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Thought more about the idea...
                  </p>
                </div>
                <ArrowDown className="text-muted-foreground" />
              </div>
              <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
                <div className="flex w-full flex-col items-center border p-4">
                  <div className="flex items-center gap-2">
                    <FaceSlightlySmiling className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-accent">Mood</p>
                </div>
                <div className="flex w-full flex-col items-center border p-4">
                  <div className="flex items-center gap-2">
                    <ListTodo className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-accent">Task/Todo</p>
                </div>
                <div className="flex w-full flex-col items-center border p-4">
                  <div className="flex items-center gap-2">
                    <CircleDollarSign className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-accent">Finance</p>
                </div>
                <div className="flex w-full flex-col items-center border p-4">
                  <div className="flex items-center gap-2">
                    <NotebookPen className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-accent">Journaling</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center gap-2">
                  <Combine className="h-3 w-3 animate-pulse text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Combining...</p>
                </div>
                <ArrowDown className="text-muted-foreground" />
              </div>
              <div className="flex w-full flex-col items-center border py-2">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4" />
                </div>
                <p className="font-semibold text-accent">
                  Personal Life Tracker
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  One place to manage different aspects of everyday life
                </p>
              </div>
            </div>
            <Separator />
          </div>

          {/* ESSENCE OF TRACKING */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Essence of Tracking</h1>
            <p className="font- font-mono text-muted-foreground uppercase">
              — Making Sense of Data
            </p>
            <p className="text-sm">
              {`As the idea continued to evolve, I realized that having multiple tracking modules in one application was only part of the solution. Collecting data from different aspects of my life would be useful, but I also wanted a way to look back at that information and understand how things were going over time.`}
            </p>
            <p className="text-sm">
              {`That's when I started thinking about summaries and visual chart.`}
            </p>
            <p className="text-sm">
              {`I wanted to be able to review my activities and progress across different periods, whether it was a daily, weekly, or monthly overview. Instead of looking at each entry individually, I could get a broader picture of my habits, mood, tasks, and other tracked activities.`}
            </p>
            <p className="text-sm">
              {`This eventually became another important part of Personal Life Tracker. The idea was to make the application more than just a place to record things. I wanted it to help me monitor my progress, recognize patterns, and reflect on how I was spending my time and managing different aspects of my life.`}
            </p>
            <Dialog>
              <DialogTrigger
                render={
                  <div className="hover:cursor-pointer lg:hover:scale-[1.005] duration-200">
                    <ImageWithBlurPlaceholder
                      src={summary}
                      classname="border-2 z-50"
                    />
                  </div>
                }
              />
              <DialogContent className="md:min-w-2xl lg:min-w-7xl">
                <DialogHeader>
                  <DialogTitle>SUMMARY.PNG</DialogTitle>
                  <div className="mt-4">
                    <ImageWithBlurPlaceholder
                      src={summary}
                      classname="border-2 z-50"
                    />
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger
                render={
                  <div className="hover:cursor-pointer lg:hover:scale-[1.005] duration-200">
                    <ImageWithBlurPlaceholder
                      src={tracker}
                      classname="border-2 z-50"
                    />
                  </div>
                }
              />
              <DialogContent className="md:min-w-2xl lg:min-w-7xl">
                <DialogHeader>
                  <DialogTitle>TRACKER.PNG</DialogTitle>
                  <div className="mt-4">
                    <ImageWithBlurPlaceholder
                      src={tracker}
                      classname="border-2 z-50"
                    />
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Separator />
          </div>

          {/* TECH STACK */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Tech Stack</h1>
            <p className="font- font-mono text-muted-foreground uppercase">
              — The tools behind the journey
            </p>
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="font-semibold">Framework & Library</h1>
                <div className="space-y-0.5 text-muted-foreground">
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Laravel
                    </span>{" "}
                    — The full-stack framework responsible for application
                    logic, routing, data processing, and API handling.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Inertia
                    </span>{" "}
                    — Bridges Laravel and React, allowing to build a modern
                    single-page application without maintaining a separate API
                    layer.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Vite
                    </span>{" "}
                    — Handles frontend asset bundling and provides a fast
                    development environment with hot module replacement.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      React
                    </span>{" "}
                    — The frontend library used to build interactive and
                    reusable user interface components.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      TypeScript
                    </span>{" "}
                    — Adds static typing to JavaScript, helping make the
                    codebase more predictable, maintainable, and easier to
                    develop.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      Tailwind CSS
                    </span>{" "}
                    — A utility-first CSS framework used to style the interface
                    efficiently and maintain consistent design patterns.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      shadcn/ui
                    </span>{" "}
                    — A collection of reusable and customizable UI components
                    that helps speed up interface development while keeping the
                    design flexible.
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-medium text-foreground">
                      MySQL/PostgreSQL
                    </span>{" "}
                    — Relational databases used to store and manage application
                    data, depending on the development environment.
                  </p>
                </div>
              </div>
            </div>
            <Separator />
          </div>
        </div>
      </div>
      <SideDecoration page="ブログ" content="プライベート生活トラッカー" />
    </div>
  )
}

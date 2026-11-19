import StackIcon from "tech-stack-icons"

export default function Skills() {
  return (
    <div className="space-y-2 font-mono text-xs font-medium text-muted-foreground">
      <div className="grid h-48 w-full grid-cols-3 gap-2">
        <div className="group col-span-2 flex h-full items-center justify-center gap-1 border duration-200 hover:border-accent/75">
          <StackIcon
            name="laravel"
            className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
            variant="grayscale"
          />
          <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
            Laravel
          </p>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
            <StackIcon
              name="react"
              className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
              variant="grayscale"
            />
            <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
              React.js
            </p>
          </div>
          <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
            <StackIcon
              name="nextjs2"
              className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
              variant="grayscale"
            />
            <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
              Next.js
            </p>
          </div>
        </div>
      </div>

      <div className="grid h-48 w-full grid-cols-2 gap-2">
        <div className="grid grid-rows-2 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
              <StackIcon
                name="shadcnui"
                className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                variant="grayscale"
              />
              <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                shadcn/ui
              </p>
            </div>

            <div className="grid grid-rows-2 gap-2">
              <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
                <StackIcon
                  name="expressjs"
                  className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                  variant="grayscale"
                />
                <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                  Express.js
                </p>
              </div>
              <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
                <StackIcon
                  name="nestjs"
                  className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                  variant="grayscale"
                />
                <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                  Nest.js
                </p>
              </div>
            </div>
          </div>

          <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
            <StackIcon
              name="tailwindcss"
              className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
              variant="grayscale"
            />
            <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
              Tailwind CSS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-rows-3 gap-2">
            <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
              <StackIcon
                name="mysql"
                className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                variant="grayscale"
              />
              <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                MySQL
              </p>
            </div>
            <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
              <StackIcon
                name="postgresql"
                className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                variant="grayscale"
              />
              <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                PostgreSQL
              </p>
            </div>
            <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
              <StackIcon
                name="redis"
                className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                variant="grayscale"
              />
              <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                Redis
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
              <StackIcon
                name="supabase"
                className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                variant="grayscale"
              />
              <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                Supabase
              </p>
            </div>
            <div className="group flex items-center justify-center gap-1 border duration-200 hover:border-accent/75">
              <StackIcon
                name="neon"
                className="h-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-3.5"
                variant="grayscale"
              />
              <p className="hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-foreground md:block">
                Neon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

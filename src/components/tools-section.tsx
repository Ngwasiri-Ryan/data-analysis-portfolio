import { TOOLS } from "@/lib/data";

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            My Toolbox
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            The skills, tools, and technologies I use to bring data to life.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl justify-center gap-4 pt-12 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-center gap-2 rounded-lg bg-card p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md hover:shadow-accent/20"
            >
              <tool.icon className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

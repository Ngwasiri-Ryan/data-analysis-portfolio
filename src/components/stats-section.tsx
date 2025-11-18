import { STATS } from "@/lib/data";
import { AnimatedCounter } from "./animated-counter";

export default function StatsSection() {
  return (
    <section id="stats" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <div className="text-4xl font-bold">
                    <AnimatedCounter value={stat.value} />
                    {stat.label.includes("Experience") && (
                        <span className="text-2xl text-muted-foreground">+</span>
                    )}
                  </div>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

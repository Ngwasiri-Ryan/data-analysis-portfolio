import { SERVICES } from "@/lib/data";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              My Services
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              What I Can Do For You
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From cleaning data to building predictive models, I offer a range
              of services to help you make sense of your data.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="font-headline text-lg">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

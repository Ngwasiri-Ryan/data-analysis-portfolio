import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-dashboard")!;

  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ngwasiri Chelsea
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A modern data analyst portfolio showcasing skills in Python, R,
                and interactive data visualization to drive business impact.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">R</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Tableau</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Contact Me
                  <Send className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl"></div>
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={600}
              height={500}
              className="relative mx-auto aspect-[6/5] overflow-hidden rounded-xl object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

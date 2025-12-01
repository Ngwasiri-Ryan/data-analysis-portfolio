import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download, Send, ExternalLink, Sparkles, Zap, TrendingUp } from "lucide-react";
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
          <div className="flex flex-col justify-center space-y-6">
            {/* Animated Header Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
              </div>
              
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none relative">
                Ngwasiri Chelsea
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500" />
              </h1>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4" />
                <span>Data Analyst & Visualization Specialist</span>
              </div>
            </div>

            {/* Description with Stats */}
            <div className="space-y-4">
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Transforming raw data into actionable insights through advanced analytics, 
                interactive visualizations, and machine learning to drive business impact.
              </p>
              
              {/* Mini Stats */}
              <div className="flex gap-6 py-2">
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-bold text-2xl">50+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Projects</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-2xl">3+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Years Exp</span>
                </div>
              </div>
            </div>

            {/* Skills Badges with Categories */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Python
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  R
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  SQL
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Tableau
                </Badge>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <Link 
                href="https://linkedin.com/in/yourprofile" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">in</span>
                </div>
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/yourprofile" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Git</span>
                </div>
                GitHub
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
              <Button asChild size="lg" className="flex-1 gap-2">
                <Link href="/resume">
                  <Download className="w-4 h-4" />
                  View Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1 gap-2">
                <Link href="/contact">
                  Contact Me
                  <Send className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            {/* Subtle background elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl blur-xl"></div>
            
            {/* Floating cards effect */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/80 rounded-lg shadow-lg border transform rotate-6 animate-float-slow">
              <div className="p-2">
                <div className="w-full h-2 bg-green-400 rounded mb-1"></div>
                <div className="w-3/4 h-2 bg-blue-400 rounded"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/80 rounded-lg shadow-lg border transform -rotate-6 animate-float-slower">
              <div className="p-2">
                <div className="w-3/4 h-2 bg-purple-400 rounded mb-1"></div>
                <div className="w-full h-2 bg-orange-400 rounded"></div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative bg-white rounded-xl shadow-2xl border overflow-hidden">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={500}
                className="w-full aspect-[6/5] object-cover"
                data-ai-hint={heroImage.imageHint}
              />
              
              {/* Image overlay badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="default" className="bg-black/80 text-white backdrop-blur-sm">
                  Live Dashboard
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
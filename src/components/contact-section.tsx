import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 sm:py-20">
      <div className="container px-4 md:px-6">
        {/* HERO */}
        <div className="mb-10 grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let’s build something good.
            </h2>
            <p className="max-w-[680px] text-muted-foreground md:text-lg">
              Open to freelance and full-time opportunities. If you’ve got a project
              or just want to say hi, my inbox is always open.
            </p>
          </div>

          {/* Optional visual anchor */}
          <Card className="hidden md:block">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Typical response time</p>
                <p className="text-2xl font-semibold">24–48 hours</p>
                <div className="mt-4 h-1 w-16 rounded-full bg-primary/80" />
                <p className="pt-3 text-sm text-muted-foreground">
                  Prefer email, happy to schedule a quick call if needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MAIN: form + contact cards */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {/* Form */}
          <Card className="w-full">
            <CardContent className="p-6 sm:p-8">
              <form className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* (Optional) Topic */}
                <div className="space-y-2">
                  <Label htmlFor="topic">What’s this about?</Label>
                  <Input id="topic" placeholder="Freelance, full-time, speaking, other…" />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me a bit about what you’re working on…"
                    className="min-h-[140px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Button type="submit" className="w-full">
                    Send message
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    No spam — just replies.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact cards */}
          <div className="space-y-4">
            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:ngwasirichelsea@gmail.com"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    ngwasirichelsea@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+237650982351"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    +237 650 982 351
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Location / Timezone</p>
                  <p className="text-base font-medium">
                    Douala, CM · WAT (UTC+1)
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-start gap-4 p-5">
                  <Linkedin className="mt-0.5 h-5 w-5 text-primary" />
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href="#"
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      linkedin.com/in/yourname
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-5">
                  <Github className="mt-0.5 h-5 w-5 text-primary" />
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a
                      href="#"
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                     github.com/ngwasirichelsea902-commits
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Optional scheduling card */}
            <Card className="border-dashed">
              <CardContent className="flex items-start gap-4 p-5">
                <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Quick call</p>
                  <a
                    href="#"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    calendly.com/yourname
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Availability strip */}
        <Card className="mt-10">
          <CardContent className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Currently booking projects for <span className="font-medium text-foreground">Feb–Apr 2026</span>.
            </p>
            <p className="text-sm text-muted-foreground">
              Interested in accessibility-driven product work.
            </p>
          </CardContent>
        </Card>

        {/* Mini footer nav */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#resume" className="hover:text-foreground transition-colors">Resume</a>
        </div>
      </div>
    </section>
  );
}

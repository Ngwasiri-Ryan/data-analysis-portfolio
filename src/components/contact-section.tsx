import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or just want to say hello? I&apos;d love to hear
            from you.
          </p>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:hello@datainsights.com"
                className="hover:text-primary transition-colors"
              >
                hello@datainsights.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" required />
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
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant="default">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import { Code, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Data Insights Portfolio.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" aria-label="Github">
                <Github className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
        </div>
      </div>
    </footer>
  );
}

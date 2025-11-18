import { RESUME_CERTIFICATIONS, RESUME_EDUCATION, RESUME_EXPERIENCE, RESUME_SKILLS } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ResumeSection() {
  return (
    <section id="resume" className="container">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
          My Professional Journey
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A summary of my experience, education, and skills in the world of data analytics.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
            <h3 className="font-headline text-2xl font-semibold mb-6">Experience</h3>
            <div className="relative border-l-2 border-primary/20">
            {RESUME_EXPERIENCE.map((item, index) => (
                <div key={index} className="mb-8 ml-6">
                <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-8 ring-background"></span>
                <div className="flex items-center gap-4 mb-1">
                    <p className="font-code text-sm text-muted-foreground">{item.period}</p>
                </div>
                <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                <p className="text-md font-medium text-muted-foreground mb-2">{item.company}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
            </div>
        </div>

        <div className="md:col-span-4 space-y-8">
            <div>
                <h3 className="font-headline text-2xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                {RESUME_SKILLS.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
                </div>
            </div>
            <div>
                <h3 className="font-headline text-2xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                    {RESUME_EDUCATION.map((edu) => (
                        <Card key={edu.degree}>
                            <CardContent className="p-4">
                                <h4 className="font-semibold">{edu.degree}</h4>
                                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                <p className="text-sm font-code text-muted-foreground">{edu.period}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="font-headline text-2xl font-semibold mb-4">Certifications</h3>
                <div className="space-y-4">
                    {RESUME_CERTIFICATIONS.map((cert)_ => (
                        <Card key={cert.name} className="bg-card/50">
                            <CardContent className="p-4 flex items-center gap-4">
                                <cert.icon className="w-8 h-8 text-accent flex-shrink-0"/>
                                <div>
                                    <p className="font-semibold">{cert.name}</p>
                                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
             <div>
                <Button asChild className="w-full" size="lg">
                    <Link href="/resume.pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Resume
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}

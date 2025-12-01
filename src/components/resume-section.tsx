import {
  RESUME_CERTIFICATIONS,
  RESUME_EDUCATION,
  RESUME_EXPERIENCE,
  RESUME_SKILLS,
  PROJECTS,
} from "@/lib/data";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

import {
  Download,
  ArrowUpRight,
  Briefcase,
  Sparkles,
  Wrench,
  GraduationCap,
  Ribbon,
} from "lucide-react";
import Link from "next/link";

export default function ResumeSection() {
  const featuredProjects = PROJECTS.slice(0, 3);

  const counts = {
    experience: RESUME_EXPERIENCE.length,
    projects: featuredProjects.length,
    skills: RESUME_SKILLS.length,
    education: RESUME_EDUCATION.length,
    certifications: RESUME_CERTIFICATIONS.length,
  };

  return (
    <section id="resume" className="container py-16 sm:py-20">
      {/* Header */}
      <div className="mb-10 space-y-3">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
          Resume
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-lg">
          A structured snapshot of my experience, skills, and education — easy to scan,
          with proof linked where relevant.
        </p>
      </div>

      <Tabs defaultValue="experience" className="grid gap-8 md:grid-cols-12">
        {/* LEFT RAIL */}
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-24 space-y-5">
            {/* Profile / Summary */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* subtle top strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary/70 via-primary to-primary/30" />
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Profile
                    </p>
                    <h3 className="font-headline text-xl font-semibold mt-1">
                      Data Analyst
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Data analyst focused on turning messy data into clear business
                      decisions. Strong in SQL, Python, BI dashboards, and statistical
                      thinking. I enjoy building reporting systems that scale and models
                      that drive measurable outcomes.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/resume.pdf" target="_blank" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Updated recently · One-page PDF
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs list */}
            <Card>
              <CardContent className="p-4">
                <TabsList
                  className="
                    flex h-auto w-full gap-2 bg-transparent p-0
                    md:flex-col md:items-stretch
                    overflow-x-auto md:overflow-visible
                  "
                >
                  <NavTab
                    value="experience"
                    icon={Briefcase}
                    label="Experience"
                    sub="Roles & impact"
                    count={counts.experience}
                  />
                  <NavTab
                    value="projects"
                    icon={Sparkles}
                    label="Selected Projects"
                    sub="Proof of work"
                    count={counts.projects}
                  />
                  <NavTab
                    value="skills"
                    icon={Wrench}
                    label="Skills"
                    sub="Tools & methods"
                    count={counts.skills}
                  />
                  <NavTab
                    value="education"
                    icon={GraduationCap}
                    label="Education"
                    sub="Study & training"
                    count={counts.education}
                  />
                  <NavTab
                    value="certifications"
                    icon={Ribbon}
                    label="Certifications"
                    sub="Credentials"
                    count={counts.certifications}
                  />
                </TabsList>
              </CardContent>
            </Card>

            {/* Contact mini-card */}
            <Card>
              <CardContent className="p-5 space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Contact
                </p>
                <a
                  href="mailto:ngwasirichelsea@gmail.com"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  ngwasirichelsea@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">
                  Douala, CM · WAT (UTC+1)
                </p>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-8">
          {/* EXPERIENCE */}
          <TabsContent value="experience" className="mt-0 space-y-4">
            <SectionTitle number="01" title="Experience" />

            <div className="space-y-4">
              {RESUME_EXPERIENCE.map((item, index) => (
                <Card key={index} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-6 sm:p-7 space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.company}
                        </p>
                      </div>
                      <p className="font-code text-xs text-muted-foreground">
                        {item.period}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* PROJECTS */}
          <TabsContent value="projects" className="mt-0 space-y-4">
            <SectionTitle number="02" title="Selected Projects" />

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((proj) => (
                <Card
                  key={proj.title}
                  className="
                    group transition-all hover:-translate-y-0.5 hover:shadow-md
                    bg-gradient-to-b from-card to-card/60
                  "
                >
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold leading-snug">{proj.title}</h4>
                      {proj.link ? (
                        <Link
                          href={proj.link}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                          aria-label={`View ${proj.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tools.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* SKILLS */}
          <TabsContent value="skills" className="mt-0 space-y-4">
            <SectionTitle number="03" title="Skills" />
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {RESUME_SKILLS.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* EDUCATION */}
          <TabsContent value="education" className="mt-0 space-y-4">
            <SectionTitle number="04" title="Education" />

            <div className="space-y-4">
              {RESUME_EDUCATION.map((edu) => (
                <Card key={edu.degree} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-6 space-y-1">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-xs font-code text-muted-foreground">
                      {edu.period}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* CERTIFICATIONS */}
          <TabsContent value="certifications" className="mt-0 space-y-4">
            <SectionTitle number="05" title="Certifications" />

            <div className="space-y-3">
              {RESUME_CERTIFICATIONS.map((cert) => (
                <Card
                  key={cert.name}
                  className="bg-card/50 transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-5 flex items-center gap-4">
                    <cert.icon className="w-7 h-7 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-2">
              <Button asChild size="lg" variant="secondary">
                <Link href="/resume.pdf" target="_blank" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Resume
                </Link>
              </Button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}

/* ---------------- small UI subcomponents ---------------- */

function NavTab({
  value,
  icon: Icon,
  label,
  sub,
  count,
}: {
  value: string;
  icon: any;
  label: string;
  sub: string;
  count: number;
}) {
  return (
    <TabsTrigger
      value={value}
      className="
        group relative w-full shrink-0 justify-start gap-3 rounded-xl border
        bg-card px-4 py-3 text-left
        transition-all hover:border-primary/40 hover:bg-primary/5
        data-[state=active]:border-primary data-[state=active]:bg-primary/10
        data-[state=active]:shadow-sm
        md:w-full
      "
    >
      <div className="
        flex h-9 w-9 items-center justify-center rounded-lg
        bg-muted text-muted-foreground
        transition-colors
        group-data-[state=active]:bg-primary/15 group-data-[state=active]:text-primary
      ">
        <Icon className="h-4.5 w-4.5" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-medium">{label}</span>
          <span className="
            rounded-full border bg-background px-2 py-0.5 text-[11px]
            text-muted-foreground group-data-[state=active]:border-primary/30
            group-data-[state=active]:text-primary
          ">
            {count}
          </span>
        </div>
        <span className="truncate text-xs text-muted-foreground">{sub}</span>
      </div>
    </TabsTrigger>
  );
}

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-code text-muted-foreground">{number}</span>
      <h3 className="font-headline text-2xl font-semibold">{title}</h3>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

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
    <section id="resume" className="container px-4 py-12 sm:py-16 md:py-20">
      {/* Header */}
      <div className="mb-8 space-y-3 sm:mb-10 sm:space-y-4">
        <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Resume
        </h2>
        <p className="max-w-[900px] text-sm text-muted-foreground sm:text-base md:text-lg">
          A structured snapshot of my experience, skills, and education — easy to scan,
          with proof linked where relevant.
        </p>
      </div>

      <Tabs defaultValue="experience" className="flex flex-col gap-6 lg:gap-8 xl:grid xl:grid-cols-12">
        {/* LEFT RAIL */}
        <aside className="xl:col-span-4">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 xl:sticky xl:top-24">
            {/* Profile / Summary */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* subtle top strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary/70 via-primary to-primary/30" />
                <div className="p-5 space-y-4 sm:p-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Profile
                    </p>
                    <h3 className="font-headline text-lg font-semibold mt-1 sm:text-xl">
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
                    <Button asChild className="w-full">
                      <Link href="/resume.pdf" target="_blank" download>
                        <Download className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
              <CardContent className="p-3 sm:p-4">
                <TabsList
                  className="
                    flex h-auto w-full gap-2 bg-transparent p-0
                    overflow-x-auto sm:overflow-visible
                    lg:grid lg:grid-cols-2
                    xl:flex xl:flex-col xl:items-stretch
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
                    label="Projects"
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
              <CardContent className="p-4 space-y-2 sm:p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Contact
                </p>
                <a
                  href="mailto:ngwasirichelsea@gmail.com"
                  className="text-sm font-medium hover:text-primary transition-colors break-all"
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
        <div className="xl:col-span-8">
          {/* EXPERIENCE */}
          <TabsContent value="experience" className="mt-0 space-y-4">
            <SectionTitle number="01" title="Experience" />

            <div className="space-y-3 sm:space-y-4">
              {RESUME_EXPERIENCE.map((item, index) => (
                <Card key={index} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-5 space-y-2 sm:p-6 sm:space-y-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold sm:text-lg">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      <p className="font-code text-xs text-muted-foreground sm:text-right sm:whitespace-nowrap">
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

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {featuredProjects.map((proj) => (
                <Card
                  key={proj.title}
                  className="
                    group transition-all hover:-translate-y-0.5 hover:shadow-md
                    bg-gradient-to-b from-card to-card/60
                    sm:min-h-[180px]
                  "
                >
                  <CardContent className="p-5 space-y-2 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold leading-snug text-sm sm:text-base">{proj.title}</h4>
                      {proj.link ? (
                        <Link
                          href={proj.link}
                          className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
                          aria-label={`View ${proj.title}`}
                        >
                          <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      ) : null}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {RESUME_SKILLS.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">
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

            <div className="space-y-3 sm:space-y-4">
              {RESUME_EDUCATION.map((edu) => (
                <Card key={edu.degree} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-5 space-y-1 sm:p-6">
                    <h4 className="font-semibold text-sm sm:text-base">{edu.degree}</h4>
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
                  <CardContent className="p-4 flex items-center gap-3 sm:p-5 sm:gap-4">
                    <cert.icon className="w-6 h-6 text-accent flex-shrink-0 sm:w-7 sm:h-7" />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm sm:text-base truncate">{cert.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {cert.issuer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <Button asChild  variant="secondary" className="w-full sm:w-auto">
                <Link href="/resume.pdf" target="_blank" download>
                  <Download className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
        group relative min-w-[180px] sm:min-w-0 shrink-0 justify-start gap-3 rounded-xl border
        bg-card px-3 py-2.5 text-left
        transition-all hover:border-primary/40 hover:bg-primary/5
        data-[state=active]:border-primary data-[state=active]:bg-primary/10
        data-[state=active]:shadow-sm
        sm:px-4 sm:py-3
        lg:w-full
      "
    >
      <div className="
        flex h-8 w-8 items-center justify-center rounded-lg
        bg-muted text-muted-foreground
        transition-colors flex-shrink-0
        group-data-[state=active]:bg-primary/15 group-data-[state=active]:text-primary
        sm:h-9 sm:w-9
      ">
        <Icon className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-xs font-medium sm:text-sm">{label}</span>
          <span className="
            rounded-full border bg-background px-1.5 py-0.5 text-[10px]
            text-muted-foreground group-data-[state=active]:border-primary/30
            group-data-[state=active]:text-primary flex-shrink-0
            sm:px-2 sm:text-[11px]
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
      <h3 className="font-headline text-xl font-semibold sm:text-2xl">{title}</h3>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
import type { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/20">
      <CardHeader className="p-0">
        <div className="aspect-[5/3.5] overflow-hidden">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            width={500}
            height={350}
            className="object-cover w-full h-full transition-transform duration-300 ease-out hover:scale-105"
            data-ai-hint={project.image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="font-headline text-xl mb-2">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline">
          <Link href={project.link}>
            View Case Study
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

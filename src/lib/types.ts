import type React from "react";
import type { ImagePlaceholder } from "./placeholder-images";

export type Project = {
  title: string;
  description: string;
  image: ImagePlaceholder;
  tools: string[];
  link: string;
};

export type Stat = {
  icon: React.ElementType;
  value: number;
  label: string;
};

export type Tool = {
  name: string;
  icon: React.ElementType;
};

export type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  useCases: string[];
};

export type ResumeItem = {
  period: string;
  title: string;
  company: string;
  description: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer: string;
  icon: React.ElementType;
};

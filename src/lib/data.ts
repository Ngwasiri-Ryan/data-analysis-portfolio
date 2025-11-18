import type {
  Certification,
  EducationItem,
  Project,
  ResumeItem,
  Service,
  Stat,
  Tool,
} from "@/lib/types";
import {
  BarChartBig,
  Briefcase,
  BrainCircuit,
  Clipboard,
  Code,
  Database,
  LineChart,
  Presentation,
  Ribbon,
  Server,
  FileText,
  Cpu,
} from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

const projectImages = {
  proj1: PlaceHolderImages.find((img) => img.id === "project-1")!,
  proj2: PlaceHolderImages.find((img) => img.id === "project-2")!,
  proj3: PlaceHolderImages.find((img) => img.id === "project-3")!,
};


export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
]

export const STATS: Stat[] = [
  { icon: Briefcase, value: 5, label: "Years of Experience" },
  { icon: BarChartBig, value: 42, label: "Projects Completed" },
  { icon: Server, value: 7, label: "Industries Worked" },
  { icon: Cpu, value: 15, label: "Tools Mastered" },
];

export const PROJECTS: Project[] = [
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a predictive model to identify customers at risk of churning, enabling proactive retention strategies that decreased churn by 15%.",
    image: projectImages.proj1,
    tools: ["Python", "Scikit-learn", "Pandas"],
    link: "#",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Designed and built an interactive dashboard in Tableau to track sales KPIs, providing real-time insights that led to a 10% increase in sales efficiency.",
    image: projectImages.proj2,
    tools: ["Tableau", "SQL", "Excel"],
    link: "#",
  },
  {
    title: "Market Basket Analysis",
    description:
      "Conducted an in-depth market basket analysis for an e-commerce client to uncover product associations, informing cross-selling campaigns and store layout changes.",
    image: projectImages.proj3,
    tools: ["R", "SQL", "Ggplot2"],
    link: "#",
  },
];

export const TOOLS: Tool[] = [
  { name: "Python", icon: Code },
  { name: "R", icon: LineChart },
  { name: "Excel", icon: FileText },
  { name: "SQL", icon: Database },
  { name: "Tableau", icon: Presentation },
  { name: "Pandas", icon: Code },
  { name: "NumPy", icon: Code },
];

export const SERVICES: Service[] = [
  {
    icon: Database,
    title: "Data Cleaning & Transformation",
    description:
      "Refining and structuring raw data to ensure accuracy and readiness for analysis.",
    useCases: ["Standardizing formats", "Handling missing values", "Merging datasets"],
  },
  {
    icon: BrainCircuit,
    title: "Predictive Modeling",
    description:
      "Building models to forecast future trends and behaviors based on historical data.",
    useCases: ["Customer churn prediction", "Sales forecasting", "Demand planning"],
  },
  {
    icon: Presentation,
    title: "BI Reporting",
    description:
      "Creating insightful dashboards and reports to visualize key business metrics.",
    useCases: ["Sales dashboards", "Marketing analytics", "Operational KPIs"],
  },
  {
    icon: Clipboard,
    title: "Statistical Analysis in R",
    description:
      "Applying rigorous statistical methods to uncover significant patterns and insights.",
    useCases: ["A/B testing", "Regression analysis", "Hypothesis testing"],
  },
];

export const RESUME_EXPERIENCE: ResumeItem[] = [
  {
    period: "2021 - Present",
    title: "Senior Data Analyst",
    company: "Tech Solutions Inc.",
    description:
      "Led a team of analysts to deliver data-driven insights for Fortune 500 clients. Specialized in predictive analytics and BI dashboard development.",
  },
  {
    period: "2019 - 2021",
    title: "Data Analyst",
    company: "Innovate Analytics",
    description:
      "Cleaned and analyzed large datasets to identify market trends. Created reports that influenced marketing campaign strategies.",
  },
  {
    period: "2018 - 2019",
    title: "Junior Analyst",
    company: "Data Corp",
    description:
      "Supported senior analysts with data extraction, cleaning, and preliminary analysis. Gained proficiency in SQL and Excel.",
  },
];

export const RESUME_EDUCATION: EducationItem[] = [
    {
        institution: "University of Data Science",
        degree: "M.S. in Data Analytics",
        period: "2016 - 2018"
    },
    {
        institution: "State University",
        degree: "B.S. in Statistics",
        period: "2012 - 2016"
    }
]

export const RESUME_SKILLS: string[] = [
    "Python", "R", "SQL", "Tableau", "Power BI", "Excel", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Statistics", "Machine Learning"
]

export const RESUME_CERTIFICATIONS: Certification[] = [
    { name: "Certified Analytics Professional", issuer: "INFORMS", icon: Ribbon },
    { name: "Tableau Desktop Specialist", issuer: "Tableau", icon: Ribbon },
    { name: "Microsoft Certified: Data Analyst", issuer: "Microsoft", icon: Ribbon },
]

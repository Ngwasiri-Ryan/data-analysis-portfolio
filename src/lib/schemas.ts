import { z } from "zod";

export const projectDescriptionSchema = z.object({
  projectName: z.string().min(2, { message: "Project name is required." }),
  projectType: z.string().min(2, { message: "Project type is required." }),
  toolsUsed: z
    .string()
    .min(1, { message: "Provide at least one tool, comma-separated." }),
  keyInsights: z.string().min(10, { message: "Describe key insights." }),
  businessImpact: z
    .string()
    .min(10, { message: "Describe the business impact." }),
});

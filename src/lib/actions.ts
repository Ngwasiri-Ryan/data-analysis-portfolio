"use server";

import {
  generateProjectDescription,
  type GenerateProjectDescriptionInput,
} from "@/ai/flows/generate-project-description";
import { type projectDescriptionSchema } from "@/lib/schemas";
import { type z } from "zod";

export async function createProjectDescriptionAction(
  values: z.infer<typeof projectDescriptionSchema>
) {
  const toolsArray = values.toolsUsed.split(",").map((tool) => tool.trim());
  const input: GenerateProjectDescriptionInput = { ...values, toolsUsed: toolsArray };

  try {
    const result = await generateProjectDescription(input);
    return {
      success: true,
      description: result.projectDescription,
    };
  } catch (error) {
    console.error("AI Error:", error);
    return {
      success: false,
      error: "Failed to generate description. Please try again.",
    };
  }
}

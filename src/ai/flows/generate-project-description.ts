'use server';

/**
 * @fileOverview AI flow to generate project descriptions from structured data.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectType: z.string().describe('The type of the project (e.g., data visualization, predictive modeling).'),
  toolsUsed: z.array(z.string()).describe('A list of tools used in the project (e.g., Python, R, Tableau).'),
  keyInsights: z.string().describe('Key insights or results from the project.'),
  businessImpact: z.string().describe('The impact of the project on the business or organization.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  projectDescription: z.string().describe('A concise description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a data analyst expert at creating compelling portfolio project descriptions.

  Based on the following information, generate a concise and engaging project description:

  Project Name: {{{projectName}}}
  Project Type: {{{projectType}}}
  Tools Used: {{#each toolsUsed}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Key Insights: {{{keyInsights}}}
  Business Impact: {{{businessImpact}}}

  Project Description: `,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

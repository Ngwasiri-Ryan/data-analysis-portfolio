"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import {
  createProjectDescriptionAction,
} from "@/lib/actions";
import { projectDescriptionSchema } from "@/lib/schemas";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProjectDescriptionGenerator() {
  const [generatedDesc, setGeneratedDesc] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof projectDescriptionSchema>>({
    resolver: zodResolver(projectDescriptionSchema),
    defaultValues: {
      projectName: "",
      projectType: "",
      toolsUsed: "",
      keyInsights: "",
      businessImpact: "",
    },
  });

  async function onSubmit(values: z.infer<typeof projectDescriptionSchema>) {
    setGeneratedDesc(null);
    const result = await createProjectDescriptionAction(values);

    if (result.success && result.description) {
      setGeneratedDesc(result.description);
      toast({
        title: "Success!",
        description: "Project description generated.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.error || "There was a problem with your request.",
      });
    }
  }

  return (
    <Card className="bg-background/70 backdrop-blur-sm border-dashed">
      <CardHeader>
        <div className="flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-primary" />
            <CardTitle className="font-headline text-2xl">AI Project Description Generator</CardTitle>
        </div>
        <CardDescription>
          Fill out the details below to generate a compelling project description with AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Customer Churn Analysis" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Predictive Modeling" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="toolsUsed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tools Used</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Python, SQL, Tableau" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please provide a comma-separated list.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keyInsights"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Insights</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Identified that customers with low engagement in the first month are 3x more likely to churn."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Impact</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Enabled targeted marketing campaigns that reduced monthly churn by 15%."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Generating..." : "Generate Description"}
              <Wand2 className="ml-2 h-4 w-4"/>
            </Button>
          </form>
        </Form>
      </CardContent>
      {generatedDesc && (
        <CardFooter className="flex-col items-start gap-2">
            <h3 className="font-headline text-lg font-semibold">Generated Description:</h3>
            <div className="prose prose-sm dark:prose-invert rounded-md border bg-muted p-4">
                <p>{generatedDesc}</p>
            </div>
        </CardFooter>
      )}
    </Card>
  );
}

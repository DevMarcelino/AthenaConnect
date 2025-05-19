// 'use server'
'use server';

/**
 * @fileOverview AI-powered mentor to answer user questions about business strategies.
 *
 * - aiMentorQuery - A function that handles user queries and returns concise answers.
 * - AIMentorQueryInput - The input type for the aiMentorQuery function.
 * - AIMentorQueryOutput - The return type for the aiMentorQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIMentorQueryInputSchema = z.object({
  query: z.string().describe('The user query about business strategies.'),
});
export type AIMentorQueryInput = z.infer<typeof AIMentorQueryInputSchema>;

const AIMentorQueryOutputSchema = z.object({
  answer: z.string().describe('The concise answer to the user query.'),
});
export type AIMentorQueryOutput = z.infer<typeof AIMentorQueryOutputSchema>;

export async function aiMentorQuery(input: AIMentorQueryInput): Promise<AIMentorQueryOutput> {
  return aiMentorQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiMentorQueryPrompt',
  input: {schema: AIMentorQueryInputSchema},
  output: {schema: AIMentorQueryOutputSchema},
  prompt: `You are an AI mentor for female entrepreneurs. Provide helpful and concise answers to the following question: {{{query}}}`,
});

const aiMentorQueryFlow = ai.defineFlow(
  {
    name: 'aiMentorQueryFlow',
    inputSchema: AIMentorQueryInputSchema,
    outputSchema: AIMentorQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

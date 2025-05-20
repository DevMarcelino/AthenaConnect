'use server';

/**
 * @fileOverview Mentora de IA para responder a perguntas de usuários sobre estratégias de negócios.
 *
 * - aiMentorQuery - Uma função que lida com as consultas do usuário e retorna respostas concisas.
 * - AIMentorQueryInput - O tipo de entrada para a função aiMentorQuery.
 * - AIMentorQueryOutput - O tipo de retorno para a função aiMentorQuery.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIMentorQueryInputSchema = z.object({
  query: z.string().describe('A consulta do usuário sobre estratégias de negócios.'),
});
export type AIMentorQueryInput = z.infer<typeof AIMentorQueryInputSchema>;

const AIMentorQueryOutputSchema = z.object({
  answer: z.string().describe('A resposta concisa para a consulta do usuário.'),
});
export type AIMentorQueryOutput = z.infer<typeof AIMentorQueryOutputSchema>;

export async function aiMentorQuery(input: AIMentorQueryInput): Promise<AIMentorQueryOutput> {
  return aiMentorQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiMentorQueryPrompt',
  input: {schema: AIMentorQueryInputSchema},
  output: {schema: AIMentorQueryOutputSchema},
  prompt: `Você é uma mentora de IA para empreendedoras. Forneça respostas úteis e concisas para a seguinte pergunta: {{{query}}}`,
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

'use server';
/**
 * @fileOverview Um agente de IA que gera descrições de eventos atraentes para organizadores de eventos.
 *
 * - generateEventDescription - Uma função que gera descrições de eventos.
 * - GenerateEventDescriptionInput - O tipo de entrada para a função generateEventDescription.
 * - GenerateEventDescriptionOutput - O tipo de retorno para a função generateEventDescription.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEventDescriptionInputSchema = z.object({
  eventName: z.string().describe('O nome do evento.'),
  eventCategory: z.string().describe('A categoria do evento (por exemplo, negócios, tecnologia, arte).'),
  targetAudience: z.string().describe('O público-alvo do evento (por exemplo, empreendedoras, profissionais de tecnologia, artistas).'),
  eventDate: z.string().describe('A data do evento.'),
  eventTime: z.string().describe('A hora do evento.'),
  eventLocation: z.string().describe('O local do evento.'),
  eventDescriptionKeywords: z.string().describe('Palavras-chave relacionadas ao evento para destacar na descrição.'),
});
export type GenerateEventDescriptionInput = z.infer<typeof GenerateEventDescriptionInputSchema>;

const GenerateEventDescriptionOutputSchema = z.object({
  eventDescription: z.string().describe('Uma descrição de evento atraente gerada pela IA.'),
});
export type GenerateEventDescriptionOutput = z.infer<typeof GenerateEventDescriptionOutputSchema>;

export async function generateEventDescription(input: GenerateEventDescriptionInput): Promise<GenerateEventDescriptionOutput> {
  return generateEventDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEventDescriptionPrompt',
  input: {schema: GenerateEventDescriptionInputSchema},
  output: {schema: GenerateEventDescriptionOutputSchema},
  prompt: `Você é uma redatora de marketing especialista em criar descrições de eventos atraentes.

  Usando as informações fornecidas abaixo, gere uma descrição de evento envolvente para atrair mais participantes.

  Nome do Evento: {{{eventName}}}
  Categoria do Evento: {{{eventCategory}}}
  Público-Alvo: {{{targetAudience}}}
  Data do Evento: {{{eventDate}}}
  Hora do Evento: {{{eventTime}}}
  Local do Evento: {{{eventLocation}}}
  Palavras-chave da Descrição do Evento: {{{eventDescriptionKeywords}}}

  Escreva uma descrição que seja concisa, envolvente e destaque os principais benefícios de participar do evento. Faça com que pareça direcionado a empreendedoras.
  `,
});

const generateEventDescriptionFlow = ai.defineFlow(
  {
    name: 'generateEventDescriptionFlow',
    inputSchema: GenerateEventDescriptionInputSchema,
    outputSchema: GenerateEventDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

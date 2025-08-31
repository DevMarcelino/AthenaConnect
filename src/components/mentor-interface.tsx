'use client';

import { useState, type FormEvent } from 'react';
import { aiMentorQuery, type AIMentorQueryInput, type AIMentorQueryOutput } from '@/ai/flows/ai-mentor-query';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function MentorInterface() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<AIMentorQueryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) {
      toast({
        title: "Consulta vazia",
        description: "Por favor, insira sua pergunta para a Mentora IA.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResponse(null);

    try {
      const input: AIMentorQueryInput = { query };
      const result = await aiMentorQuery(input);
      setResponse(result);
    } catch (error) {
      console.error('Erro na Consulta à Mentora IA:', error);
      toast({
        title: "Erro",
        description: "Falha ao obter uma resposta da Mentora IA. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Sparkles className="mr-2 h-5 w-5 text-accent" />
          Pergunte à Athena
        </CardTitle>
        <CardDescription>
          Faça suas perguntas ou desafios de negócios e deixe nossa mentora IA fornecer orientação.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Ex: 'Quais são as estratégias de marketing eficazes para uma nova boutique online?'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={4}
            disabled={isLoading}
            className="text-base"
          />
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Obter Conselho
          </Button>
        </form>
      </CardContent>
      {response && (
        <CardFooter className="mt-6 border-t pt-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">Sabedoria de Athena:</h3>
            <div className="prose prose-sm max-w-none rounded-md border bg-muted/30 p-4 text-foreground">
              <p>{response.answer}</p>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

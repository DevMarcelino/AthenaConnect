import MentorInterface from '@/components/mentor-interface';
import { Brain } from 'lucide-react';

export default function AiMentorPage() {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-card rounded-lg shadow">
        <div className="flex items-center gap-3">
          <Brain className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary">Mentora IA</h1>
            <p className="text-muted-foreground mt-1">Sua guia pessoal para o sucesso empreendedor.</p>
          </div>
        </div>
      </div>
      <MentorInterface />
    </div>
  );
}

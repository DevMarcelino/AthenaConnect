import ChatInterface from '@/components/chat-interface';
import { MessageSquareText } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col"> {/* Ajuste a altura com base no cabeçalho/rodapé */}
      <div className="p-6 bg-card rounded-lg shadow mb-6">
         <div className="flex items-center gap-3">
          <MessageSquareText className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary">Mensagens Diretas</h1>
            <p className="text-muted-foreground mt-1">Conecte-se e converse com outras empreendedoras.</p>
          </div>
        </div>
      </div>
      <ChatInterface />
    </div>
  );
}

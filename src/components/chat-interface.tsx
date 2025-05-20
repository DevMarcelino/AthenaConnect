'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Paperclip, Send, Smile, UserCircle, Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface User {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage: string;
  lastMessageTime: string;
  online?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
}

const mockUsers: User[] = [
  { id: '1', name: 'Sophia Miller', avatarUrl: 'https://placehold.co/40x40.png?text=SM', lastMessage: 'Oi, como você está?', lastMessageTime: '10:30', online: true },
  { id: '2', name: 'Isabella Chen', avatarUrl: 'https://placehold.co/40x40.png?text=IC', lastMessage: 'Vamos colocar o papo em dia em breve!', lastMessageTime: 'Ontem', online: false },
  { id: '3', name: 'Olivia Garcia', avatarUrl: 'https://placehold.co/40x40.png?text=OG', lastMessage: 'Ótima ideia para o evento!', lastMessageTime: 'Seg', online: true },
];

const mockMessages: { [userId: string]: Message[] } = {
  '1': [
    { id: 'm1', senderId: '1', text: 'Oi, como você está?', timestamp: '10:30', isOwn: false },
    { id: 'm2', senderId: 'currentUser', text: 'Estou bem, obrigada! E você?', timestamp: '10:31', isOwn: true },
  ],
  '2': [
    { id: 'm3', senderId: '2', text: 'Vamos colocar o papo em dia em breve!', timestamp: 'Ontem', isOwn: false },
  ],
  '3': [],
};


export default function ChatInterface() {
  const [selectedUser, setSelectedUser] = useState<User | null>(mockUsers[0]);
  const [messages, setMessages] = useState<Message[]>(selectedUser ? mockMessages[selectedUser.id] : []);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setMessages(mockMessages[selectedUser.id] || []);
    } else {
      setMessages([]);
    }
  }, [selectedUser]);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const newMsg: Message = {
        id: `msg-${Date.now()}`,
        senderId: 'currentUser',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      };
      setMessages([...messages, newMsg]);
      // Atualiza a última mensagem mock para o usuário
      mockMessages[selectedUser.id] = [...(mockMessages[selectedUser.id] || []), newMsg];
      const userIndex = mockUsers.findIndex(u => u.id === selectedUser.id);
      if (userIndex !== -1) {
        mockUsers[userIndex].lastMessage = newMessage;
        mockUsers[userIndex].lastMessageTime = newMsg.timestamp;
      }
      setNewMessage('');
    }
  };
  
  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-1 border rounded-lg shadow bg-card overflow-hidden">
      {/* Painel de Lista de Usuários */}
      <div className="w-1/3 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar contatos..." 
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`p-3 hover:bg-muted/50 cursor-pointer ${selectedUser?.id === user.id ? 'bg-muted' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold truncate text-sm">{user.name}</h4>
                     {user.online && <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{user.lastMessage}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{user.lastMessageTime}</span>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground text-center">Nenhum contato encontrado.</p>
          )}
        </ScrollArea>
      </div>

      {/* Painel de Chat */}
      <div className="w-2/3 flex flex-col">
        {selectedUser ? (
          <>
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedUser.avatarUrl} alt={selectedUser.name} data-ai-hint="person portrait"/>
                  <AvatarFallback>{selectedUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-base">{selectedUser.name}</h3>
                  <p className={`text-xs ${selectedUser.online ? 'text-green-500' : 'text-muted-foreground'}`}>
                    {selectedUser.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              {/* Potencialmente adicionar ícones de chamada/videochamada aqui */}
            </div>
            <ScrollArea className="flex-1 p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                      msg.isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isOwn ? 'text-primary-foreground/70 text-right' : 'text-muted-foreground/70 text-left'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
               {messages.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8">Nenhuma mensagem ainda. Comece a conversa!</p>
                )}
            </ScrollArea>
            <Separator/>
            <div className="p-4 border-t bg-background">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon"> <Smile className="h-5 w-5 text-muted-foreground" /></Button>
                <Button variant="ghost" size="icon"> <Paperclip className="h-5 w-5 text-muted-foreground" /></Button>
                <Input
                  placeholder="Digite uma mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <UserCircle className="h-24 w-24 text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground">Selecione um chat</h3>
            <p className="text-muted-foreground">Escolha alguém dos seus contatos para começar a conversar.</p>
          </div>
        )}
      </div>
    </div>
  );
}

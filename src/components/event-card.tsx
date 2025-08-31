import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Users, Share2, Bookmark, CheckCircle, ExternalLink } from 'lucide-react';

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  attendees: number;
  organizer: string;
};

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={event.imageUrl}
            alt={event.title} // Alt text permanece dinâmico, mas o conteúdo de event.title será traduzido na origem
            layout="fill"
            objectFit="cover"
            data-ai-hint={event.imageHint}
          />
           <Badge variant="secondary" className="absolute top-2 right-2 bg-opacity-80 backdrop-blur-sm">{event.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl mb-2 text-primary">{event.title}</CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{event.location}</span>
          </div>
           <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span>{event.attendees} participantes</span>
          </div>
          <p className="text-foreground/80 line-clamp-3 pt-1">{event.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
            <Bookmark className="mr-2 h-4 w-4" /> Salvar
          </Button>
          <Button size="sm" className="flex-1 sm:flex-initial bg-accent hover:bg-accent/90 text-accent-foreground">
            <CheckCircle className="mr-2 h-4 w-4" /> Participar
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
          <Share2 className="mr-2 h-4 w-4" /> Compartilhar
        </Button>
      </CardFooter>
    </Card>
  );
}

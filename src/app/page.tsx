import EventCard from '@/components/event-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Filter, MapPin, Search, Share2, Bookmark, CheckCircle } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Cúpula Mulheres na Tecnologia',
    date: '2024-07-15',
    location: 'Online',
    category: 'Tecnologia',
    description: 'Um evento de destaque para mulheres na tecnologia para networking, aprendizado e crescimento. Com palestrantes principais, workshops e painéis de discussão.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'conference technology',
    attendees: 120,
    organizer: 'Tech Connect', // Nome da marca, mantido
  },
  {
    id: '2',
    title: 'Masterclass de Empreendedorismo',
    date: '2024-07-22',
    location: 'Nova York, EUA',
    category: 'Negócios',
    description: 'Aprenda o essencial para iniciar e escalar um negócio de sucesso com especialistas do setor. Ideal para empreendedoras aspirantes e em estágio inicial.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'workshop business',
    attendees: 75,
    organizer: 'Startup Hub', // Nome da marca, mantido
  },
  {
    id: '3',
    title: 'Expo de Arte e Design',
    date: '2024-08-05',
    location: 'Paris, França',
    category: 'Artes',
    description: 'Descubra criações únicas de talentosas artistas e designers mulheres. Uma vibrante vitrine de criatividade e inovação.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'art gallery',
    attendees: 200,
    organizer: 'Creative Collective', // Nome da marca, mantido
  },
];

export default function EventDiscoveryPage() {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-card rounded-lg shadow">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Descubra Eventos</h1>
        <p className="text-muted-foreground mt-2">Encontre eventos feitos para empreendedoras como você.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg shadow">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Buscar eventos..." className="pl-10 w-full" />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Categorias</SelectItem>
            <SelectItem value="technology">Tecnologia</SelectItem>
            <SelectItem value="business">Negócios</SelectItem>
            <SelectItem value="arts">Artes</SelectItem>
            <SelectItem value="wellness">Bem-estar</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Localização" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Localizações</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="new-york">Nova York</SelectItem>
            <SelectItem value="paris">Paris</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-full md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
       {events.length === 0 && (
        <div className="text-center py-12">
          <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-xl font-semibold">Nenhum Evento Encontrado</h3>
          <p className="mt-1 text-muted-foreground">Tente ajustar seus filtros ou volte mais tarde.</p>
        </div>
      )}
    </div>
  );
}

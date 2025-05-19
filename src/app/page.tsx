import EventCard from '@/components/event-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Filter, MapPin, Search, Share2, Bookmark, CheckCircle } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Women in Tech Summit',
    date: '2024-07-15',
    location: 'Online',
    category: 'Technology',
    description: 'A premier event for women in technology to network, learn, and grow. Featuring keynote speakers, workshops, and panel discussions.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'conference technology',
    attendees: 120,
    organizer: 'Tech Connect',
  },
  {
    id: '2',
    title: 'Entrepreneurship Masterclass',
    date: '2024-07-22',
    location: 'New York, USA',
    category: 'Business',
    description: 'Learn the essentials of starting and scaling a successful business from industry experts. Ideal for aspiring and early-stage entrepreneurs.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'workshop business',
    attendees: 75,
    organizer: 'Startup Hub',
  },
  {
    id: '3',
    title: 'Art & Design Expo',
    date: '2024-08-05',
    location: 'Paris, France',
    category: 'Arts',
    description: 'Discover unique creations from talented female artists and designers. A vibrant showcase of creativity and innovation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'art gallery',
    attendees: 200,
    organizer: 'Creative Collective',
  },
];

export default function EventDiscoveryPage() {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-card rounded-lg shadow">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Discover Events</h1>
        <p className="text-muted-foreground mt-2">Find events tailored for female entrepreneurs like you.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg shadow">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Search events..." className="pl-10 w-full" />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="arts">Arts</SelectItem>
            <SelectItem value="wellness">Wellness</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="paris">Paris</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-full md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filters
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
          <h3 className="mt-2 text-xl font-semibold">No Events Found</h3>
          <p className="mt-1 text-muted-foreground">Try adjusting your filters or check back later.</p>
        </div>
      )}
    </div>
  );
}

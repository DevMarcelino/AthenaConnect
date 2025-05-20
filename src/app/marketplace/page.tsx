import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Search, ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Conjunto de Joias Artesanais',
    category: 'Moda',
    price: 75.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'jewelry necklace',
    seller: 'Elena Designs', // Nome da marca, mantido
    rating: 4.5,
    reviews: 23,
    location: 'Atenas, Grécia',
  },
  {
    id: '2',
    name: 'Kit de Skincare Orgânico',
    category: 'Beleza',
    price: 120.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'skincare bottles',
    seller: 'Naturelle Beauty', // Nome da marca, mantido
    rating: 4.8,
    reviews: 45,
    location: 'Online',
  },
  {
    id: '3',
    name: 'Sessão de Coaching Empresarial',
    category: 'Serviços',
    price: 250.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'coaching consultation',
    seller: 'Sophia Coaching', // Nome da marca, mantido
    rating: 5.0,
    reviews: 15,
    location: 'Remoto',
  },
  {
    id: '4',
    name: 'Pacote de Web Design Personalizado',
    category: 'Serviços',
    price: 800.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'web design',
    seller: 'Digital Goddess', // Nome da marca, mantido
    rating: 4.9,
    reviews: 30,
    location: 'Global',
  }
];

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-card rounded-lg shadow">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Marketplace de Pares</h1>
        <p className="text-muted-foreground mt-2">Descubra produtos e serviços de outras empreendedoras.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg shadow">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Buscar produtos ou serviços..." className="pl-10 w-full" />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Categorias</SelectItem>
            <SelectItem value="fashion">Moda</SelectItem>
            <SelectItem value="beauty">Beleza</SelectItem>
            <SelectItem value="services">Serviços</SelectItem>
            <SelectItem value="home">Casa e Decoração</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Avaliação" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Qualquer Avaliação</SelectItem>
            <SelectItem value="4+"><Star className="inline-block mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" /> 4 Estrelas ou Mais</SelectItem>
            <SelectItem value="3+"><Star className="inline-block mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" /> 3 Estrelas ou Mais</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-full md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
         <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          Anuncie Seu Produto
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
       {products.length === 0 && (
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-xl font-semibold">Nenhum Produto Encontrado</h3>
          <p className="mt-1 text-muted-foreground">Tente ajustar seus filtros ou volte mais tarde.</p>
        </div>
      )}
    </div>
  );
}
